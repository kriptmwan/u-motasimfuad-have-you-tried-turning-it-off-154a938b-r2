import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I can see you've restarted it four times already. Great news: the fifth time is the one that counts, according to a manual I haven't read.";

// The gate accepts 1-199 characters; refuse to write an entry that cannot pass.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
