// Fortune Cookie Wisdom for Developers
// Writes one original fortune-cookie line (110 characters) to /output/entry.txt.
//
// The line: a tired senior engineer's truth about debugging at midnight,
// with a quiet twist — the "them" you must be gentle with is a past version
// of yourself.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The bug you chase at midnight was written by a calmer you; be gentle with them, for they must fix it tomorrow.";

// The gate requires UTF-8 text of 1 to 120 characters, not only white space.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
