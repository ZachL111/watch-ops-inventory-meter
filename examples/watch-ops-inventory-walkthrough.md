# Watch Ops Inventory Meter Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 196 | ship |
| stress | rename risk | 207 | ship |
| edge | operator cost | 137 | watch |
| recovery | idempotence | 269 | ship |
| stale | dry-run spread | 239 | ship |

Start with `recovery` and `edge`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`recovery` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
