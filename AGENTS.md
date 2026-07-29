# Gintz Coffee — Permanent Working Agreement

These instructions are mandatory for all future work on this project.

## Simple publishing workflow

1. Work directly on the local `main` branch. Do not create or use feature branches unless the user explicitly changes this agreement.
2. Do not ask the user to open PowerShell or run Git commands.
3. Make one clearly explained, frontend-only change at a time.
4. Never modify payment-processing logic, order-submission APIs (e.g., `/api/order`, `/api/sumit-payment`), customer-data handling, database, or other sensitive backend code. UI-only changes on the checkout/cart/order pages — form field visibility, required-field rules, copy, or layout — are allowed, following the standard review-and-approval workflow below.
5. Validate the change locally and verify that no temporary build, cache, dependency, or backup files will be included.
6. Let the user review the change locally and wait for explicit approval.
7. Only after approval, tell the user clearly that they may run the existing `PUBLISH` file.
8. Never push, merge, or publish on the user's behalf unless the user explicitly asks for that action.
9. Before approving publication, confirm that Git contains only the intended source changes and that the production build passes.
10. Treat any error shown by `PUBLISH` as a failed publication until verified; never rely on its final `DONE` message alone.

## User-facing process

Use this exact simple sequence:

**Explain the proposed change → implement it → test it → show it locally → receive approval → say “אפשר לעשות PUBLISH”.**
