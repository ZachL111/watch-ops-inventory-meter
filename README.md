# watch-ops-inventory-meter

`watch-ops-inventory-meter` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for inventory scenarios with safe and unsafe fixtures, remediation hints, and no production deployment claims.

## Use Case

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Watch Ops Inventory Meter Review Notes

The first comparison I would make is `idempotence` against `operator cost` because it shows where the rule is most opinionated.

## Highlights

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/watch-ops-inventory-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `idempotence` and `operator cost`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The JavaScript code keeps the review rule close to the tests.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Future Work

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
