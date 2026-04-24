import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "ap-world-history", "units");

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".html"))) {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, "utf8");
  const before = s.length;
  s = s.replace(/<\/div>\s*<\/div>\s*<div class="chapter"/g, '</div></div></div>\n    <div class="chapter"');
  if (s.length !== before) {
    fs.writeFileSync(p, s, "utf8");
    console.log("fixed", f);
  }
}
