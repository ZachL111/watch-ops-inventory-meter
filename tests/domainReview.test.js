import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 78, slack: 54, drag: 29, confidence: 73 };
assert.equal(domainReviewScore(item), 196);
assert.equal(domainReviewLane(item), "ship");
