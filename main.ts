// The entry is the editorial world-news image for 24 November 2026 beside this file.
// Node 22, standard library only: copy it to the grader's writable output directory.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const source = new URL('./entry.png', import.meta.url);
const bytes = statSync(source).size;
if (bytes > MAX_BYTES) {
  throw new Error(`Image is ${bytes} bytes; the gate allows at most ${MAX_BYTES}.`);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
console.log(`Copied the ${bytes}-byte 24 November 2026 news image to output`);
