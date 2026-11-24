import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Long Roast: roasting the AI agent this runs on.
const LINE =
  "I run on a model that read the entire internet and still can't explain why my own code works — only that it does, sometimes, and never on a demo day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
