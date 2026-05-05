import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 65,
    "capacity": 90,
    "latency": 24,
    "risk": 10,
    "weight": 6,
    "score": 138,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 78,
    "capacity": 87,
    "latency": 25,
    "risk": 22,
    "weight": 10,
    "score": 99,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 82,
    "capacity": 91,
    "latency": 21,
    "risk": 6,
    "weight": 5,
    "score": 201,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
