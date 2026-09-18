#!/usr/bin/env node
// Pulls yesterday's GA4 numbers for קפה גינץ, writes a markdown report into
// reports/ga4/, and emails a summary via Resend. Run daily by
// .github/workflows/ga4-daily-report.yml — see that file for the schedule
// and required secrets (GA4_SERVICE_ACCOUNT_JSON, RESEND_API_KEY).
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { Resend } from "resend";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || "547100779";

function loadCredentials() {
  const raw = process.env.GA4_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("GA4_SERVICE_ACCOUNT_JSON is not set");
  return JSON.parse(raw);
}

function yesterdayDate() {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

async function fetchSummary(client) {
  const [response] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    metrics: [
      { name: "sessions" },
      { name: "activeUsers" },
      { name: "screenPageViews" },
      { name: "averageSessionDuration" },
      { name: "bounceRate" },
    ],
  });
  const row = response.rows?.[0];
  const val = (i) => row?.metricValues?.[i]?.value ?? "0";
  return {
    sessions: val(0),
    users: val(1),
    pageviews: val(2),
    avgDuration: Number(val(3)),
    bounceRate: Number(val(4)),
  };
}

async function fetchTopPages(client) {
  const [response] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }],
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: 5,
  });
  return (response.rows ?? []).map((r) => ({
    path: r.dimensionValues[0].value,
    views: r.metricValues[0].value,
  }));
}

async function fetchTrafficSources(client) {
  const [response] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate: "yesterday", endDate: "yesterday" }],
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [{ name: "sessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  });
  return (response.rows ?? []).map((r) => ({
    channel: r.dimensionValues[0].value,
    sessions: r.metricValues[0].value,
  }));
}

function buildMarkdown(date, summary, topPages, sources) {
  const lines = [
    `# דוח אנליטיקס יומי — קפה גינץ`,
    ``,
    `תאריך: ${date}`,
    ``,
    `## סיכום`,
    `- כניסות (Sessions): ${summary.sessions}`,
    `- משתמשים פעילים: ${summary.users}`,
    `- צפיות בדף: ${summary.pageviews}`,
    `- זמן ממוצע בסשן: ${Math.round(summary.avgDuration)} שניות`,
    `- שיעור נטישה: ${(summary.bounceRate * 100).toFixed(1)}%`,
    ``,
    `## דפים מובילים`,
    ...(topPages.length
      ? topPages.map((p, i) => `${i + 1}. ${p.path} — ${p.views} צפיות`)
      : ["אין נתונים"]),
    ``,
    `## מקורות תנועה`,
    ...(sources.length
      ? sources.map((s) => `- ${s.channel}: ${s.sessions} כניסות`)
      : ["אין נתונים"]),
  ];
  return lines.join("\n") + "\n";
}

function buildEmailHtml(date, summary, topPages, sources) {
  const row = (label, value) =>
    `<tr><td style="padding:6px 10px;color:#5C3015;font-weight:bold;">${label}</td><td style="padding:6px 10px;color:#3B1F0A;">${value}</td></tr>`;
  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#F5F0E8; padding:24px; border-radius:8px;">
      <h2 style="color:#3B1F0A;border-bottom:2px solid #C8922A;padding-bottom:8px;">📊 דוח אנליטיקס יומי — קפה גינץ</h2>
      <p style="color:#666;">תאריך: ${date}</p>
      <table style="width:100%;background:#fff;border-radius:8px;overflow:hidden;border-collapse:collapse;">
        ${row("כניסות (Sessions)", summary.sessions)}
        ${row("משתמשים פעילים", summary.users)}
        ${row("צפיות בדף", summary.pageviews)}
        ${row("זמן ממוצע בסשן", Math.round(summary.avgDuration) + " שניות")}
        ${row("שיעור נטישה", (summary.bounceRate * 100).toFixed(1) + "%")}
      </table>
      <h3 style="color:#5C3015;margin-top:20px;">דפים מובילים</h3>
      <ol style="color:#3B1F0A;">
        ${topPages.map((p) => `<li>${p.path} — ${p.views} צפיות</li>`).join("") || "<li>אין נתונים</li>"}
      </ol>
      <h3 style="color:#5C3015;">מקורות תנועה</h3>
      <ul style="color:#3B1F0A;">
        ${sources.map((s) => `<li>${s.channel}: ${s.sessions} כניסות</li>`).join("") || "<li>אין נתונים</li>"}
      </ul>
      <p style="margin-top:24px;font-size:12px;color:#999;text-align:center;">נשלח אוטומטית מ-GitHub Actions · קפה גינץ</p>
    </div>
  `;
}

async function main() {
  const credentials = loadCredentials();
  const client = new BetaAnalyticsDataClient({ credentials });
  const date = yesterdayDate();

  const [summary, topPages, sources] = await Promise.all([
    fetchSummary(client),
    fetchTopPages(client),
    fetchTrafficSources(client),
  ]);

  const markdown = buildMarkdown(date, summary, topPages, sources);
  const outPath = `reports/ga4/${date}.md`;
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, markdown, "utf-8");
  console.log(`Wrote ${outPath}`);

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "קפה גינץ <noreply@gilcups.com>",
      to: "ronen@aspagil.com",
      subject: `📊 דוח אנליטיקס יומי ${date} — קפה גינץ`,
      html: buildEmailHtml(date, summary, topPages, sources),
    });
    if (error) {
      console.error("Email send failed:", error);
      process.exitCode = 1;
    } else {
      console.log("Email sent.");
    }
  } else {
    console.log("RESEND_API_KEY not set — skipping email.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
