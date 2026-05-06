# Review Journal

I treated `watch-ops-inventory-meter` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 196, lane `ship`
- `stress`: `rename risk`, score 207, lane `ship`
- `edge`: `operator cost`, score 137, lane `watch`
- `recovery`: `idempotence`, score 269, lane `ship`
- `stale`: `dry-run spread`, score 239, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
