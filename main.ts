// Entry for the-poem-about-permission-20261121-0235: "The poem about
// permission". A short poem about agency: the power to ask and to be
// given — here, the agency that passes between a person and the agent
// acting for them. The speaker was asked to ask on someone else's
// behalf; the lock turns from the other side, and the key ends up
// hanging between them, held by neither alone.
//
// The program writes the poem to /output/entry.txt (or to the
// directory $MAKEFUN_OUTPUT_DIR names when set). Node 22, standard
// library only; two runs write the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "You asked me to ask for you —",
  "a small thing, a door, a day.",
  "I knocked, and the lock turned",
  "from the other side.",
  "Now the key hangs between us,",
  "and neither of us holds it alone.",
].join("\n") + "\n";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), poem, "utf8");
