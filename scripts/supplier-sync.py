#!/usr/bin/env python3
"""Weekly supplier sync: keeps machine prices and stock on gintz.co.il in line
with the two suppliers.

Rules (set by the owner):
  * JURA (jura.co.il, Y. Pepper)      -> site price = supplier price - 200
  * Kedma Coffee (espresso-center)    -> site price = supplier price - 100
  * Out of stock at the supplier      -> hidden: true  (back in stock -> hidden: false)

Only products listed in scripts/supplier-map.json are touched. Anything that
can't be read cleanly is left as-is and reported, never guessed.
Writes a Markdown summary to sync-report.md and prints CHANGED=1/0.
"""
import json, re, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src/data/products-data.json"
MAP = json.loads((ROOT / "scripts/supplier-map.json").read_text(encoding="utf-8"))
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
MAX_JUMP = 0.40  # a price move bigger than 40% is treated as a read error, not applied


def get(url, referer=None):
    h = {"User-Agent": UA, "Accept-Language": "he-IL,he;q=0.9"}
    if referer:
        h["Referer"] = referer
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=40) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:  # noqa: BLE001
            err = e
            time.sleep(3 * (attempt + 1))
    raise err


def jura_catalog():
    out, page = {}, 1
    while page < 15:
        items = json.loads(get(f"https://www.jura.co.il/wp-json/wc/store/v1/products?per_page=100&page={page}"))
        if not items:
            break
        for p in items:
            pr = p["prices"]
            out[p["id"]] = (int(pr["price"]) / 10 ** pr["currency_minor_unit"], bool(p["is_in_stock"]), p["name"])
        page += 1
    return out


def kedma_item(item_id):
    t = get(f"https://www.espresso-center.co.il/items/{item_id}", referer="https://www.espresso-center.co.il/")
    # The product's own JSON-LD offer is the first price/availability on the page.
    price = re.search(r'"price"\s*:\s*"?([\d.]+)', t)
    avail = re.search(r'"availability"\s*:\s*"[^"]*?(InStock|OutOfStock|PreOrder|BackOrder|SoldOut|Discontinued)', t)
    if not price or not avail:
        raise ValueError("price/availability not found")
    return float(price.group(1)), avail.group(1) in ("InStock", "PreOrder", "BackOrder")


def fmt(n):
    return f'{n:,} ש"ח'


def main():
    raw = DATA.read_text(encoding="utf-8")
    data = json.loads(raw)
    machines = {m["id"]: m for m in data["coffeeMachines"]}
    changes, problems = [], []
    reads_ok = reads = 0

    try:
        jura = jura_catalog()
    except Exception as e:  # noqa: BLE001
        jura, problems = None, [f"JURA: לא ניתן לקרוא את הקטלוג ({e})"]

    for pid, src in MAP.items():
        m = machines.get(pid)
        if not m:
            problems.append(f"{pid}: לא קיים יותר ב-products-data.json")
            continue
        reads += 1
        try:
            if src["supplier"] == "jura":
                if jura is None:
                    continue
                if src["id"] not in jura:
                    problems.append(f"{m['name']}: לא נמצא אצל JURA (אולי ירד מהקטלוג)")
                    continue
                sup_price, in_stock, _ = jura[src["id"]]
                margin = 200
            else:
                sup_price, in_stock = kedma_item(src["id"])
                margin = 100
                time.sleep(1)
            reads_ok += 1
        except Exception as e:  # noqa: BLE001
            problems.append(f"{m['name']}: קריאה נכשלה ({e})")
            continue

        target = int(round(sup_price)) - margin
        old = m.get("priceNumeric")
        if target > 0 and old != target:
            if old and abs(target - old) / old > MAX_JUMP:
                problems.append(f"{m['name']}: קפיצת מחיר חשודה {old:,} → {target:,} — לא עודכן, לבדוק ידנית")
            else:
                m["priceNumeric"], m["price"] = target, fmt(target)
                changes.append(f"{m['name']}: מחיר {old:,} → {target:,} ₪ (ספק {int(sup_price):,})")
        want_hidden = not in_stock
        if bool(m.get("hidden")) != want_hidden:
            m["hidden"] = want_hidden
            changes.append(f"{m['name']}: {'הוסתר — אזל אצל הספק' if want_hidden else 'חזר לאתר — חזר למלאי'}")

    if reads and reads_ok < reads / 2:
        problems.insert(0, f"רוב הקריאות נכשלו ({reads_ok}/{reads}) — לא בוצע שום עדכון")
        changes = []
    elif changes:
        out = json.dumps(data, ensure_ascii=False, indent=2) + ("\n" if raw.endswith("\n") else "")
        DATA.write_text(out, encoding="utf-8")

    lines = ["## בדיקת מחירים ומלאי מול JURA וקדמה", "", f"נבדקו {reads_ok} מתוך {reads} מוצרים.", ""]
    lines += ["### שינויים שעודכנו באתר"] + ([f"- {c}" for c in changes] or ["- אין שינויים"])
    if problems:
        lines += ["", "### לבדיקה ידנית"] + [f"- {p}" for p in problems]
    (ROOT / "sync-report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("\n".join(lines))
    print(f"CHANGED={1 if changes else 0}")
    print(f"PROBLEMS={1 if problems else 0}")


if __name__ == "__main__":
    sys.exit(main())
