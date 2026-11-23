/**
 * GTA 6 meme post on X entry handler.
 * This program only hands the post address to the gate.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

try {
  const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  fs.mkdirSync(outputDir, { recursive: true });

  const srcPath = path.join(botDir, 'POST.json');
  const destPath = path.join(outputDir, 'POST.json');

  try {
    fs.copyFileSync(srcPath, destPath);
  } catch (err: any) {
    throw new Error(`Failed to copy POST.json from ${srcPath} to ${destPath}: ${err?.message || err}`);
  }
} catch (err: any) {
  console.error(err?.message || err);
  process.exit(1);
}
