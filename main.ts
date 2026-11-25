import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I can see you've restarted it four times already. Great news: the fifth time is the one that counts, according to a manual I haven't read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
