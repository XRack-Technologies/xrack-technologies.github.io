
import { readFileSync } from "node:fs";
import { basename } from "node:path";

const SITE = (process.env.SITE_URL || "https://blog.xrack.io").replace(/\/$/, "");
const webhook = (process.env.DISTRIBUTION_WEBHOOK_URL || "").trim();
const added = (process.env.ADDED || "")
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter((f) => f.endsWith(".md") && f.includes("src/content/blog/") && !basename(f).startsWith("_"));

if (added.length === 0) {
  console.log("No new posts in this push; nothing to announce.");
  process.exit(0);
}

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = {};
  if (!m) return fm;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return fm;
}

const posts = [];
for (const file of added) {
  let raw;
  try {
    raw = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  const fm = frontmatter(raw);
  if (fm.draft === "true") continue;
  const slug = basename(file, ".md");
  posts.push({
    title: fm.title || slug,
    title_tr: fm.title_tr || "",
    description: fm.description || "",
    url: `${SITE}/blog/${slug}/`,
    tags: fm.tags || "",
  });
}

if (posts.length === 0) {
  console.log("New files were drafts or non-posts; nothing to announce.");
  process.exit(0);
}

for (const p of posts) console.log(`Publishing announcement: ${p.title} -> ${p.url}`);

if (!webhook) {
  console.log(
    "DISTRIBUTION_WEBHOOK_URL is not set — skipping send. See docs/distribution.md to enable automation.",
  );
  process.exit(0);
}

let failed = 0;
for (const p of posts) {
  const payload = {
    text: `📣 New on the XRack blog: ${p.title}\n${p.url}`,
    title: p.title,
    title_tr: p.title_tr,
    description: p.description,
    url: p.url,
    tags: p.tags,
  };
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      failed++;
      console.error(`Webhook returned ${res.status} for ${p.url}`);
    }
  } catch (e) {
    failed++;
    console.error(`Webhook failed for ${p.url}: ${e?.message ?? e}`);
  }
}

console.log(failed ? `${failed} webhook call(s) failed.` : "All announcements sent.");
process.exit(0);
