import sharp from "sharp";

const CARD_ELEVATED = "20 3% 11%";
const BORDER = "20 3% 17%";
const FOREGROUND = "0 0% 98%";
const MUTED = "14 8% 62%";
const HUES = ["6 62% 50%", "12 62% 62%", "22 75% 58%", "348 58% 60%"];

export function hueForTag(tag: string): string {
  const seed = [...tag].reduce((s, ch) => s + ch.charCodeAt(0), 0);
  return HUES[seed % HUES.length];
}

function hslToHex(hsl: string): string {
  const [h, s, l] = hsl
    .replace(/%/g, "")
    .split(/\s+/)
    .map(Number)
    .map((n, i) => (i === 0 ? n : n / 100));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const to = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function wrap(text: string, fontSize: number, maxWidth: number, maxLines: number): string[] {
  const charW = fontSize * 0.56;
  const perLine = Math.max(6, Math.floor(maxWidth / charW));
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > perLine && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].replace(/\s+\S*$/, "") + "…";
  }
  return lines;
}

interface OgInput {
  title: string;
  tag: string;
}

function buildSvg({ title, tag }: OgInput): string {
  const W = 1200;
  const H = 630;
  const MARGIN = 80;
  const maxTextW = W - MARGIN * 2;

  const cov = hslToHex(hueForTag(tag));
  const bg = hslToHex(CARD_ELEVATED);
  const border = hslToHex(BORDER);
  const fg = hslToHex(FOREGROUND);
  const muted = hslToHex(MUTED);

  const fontSize = title.length <= 30 ? 92 : title.length <= 56 ? 74 : 60;
  const lineH = fontSize * 1.08;
  const lines = wrap(title, fontSize, maxTextW, 3);
  const blockH = lines.length * lineH;
  const top = Math.max(MARGIN + fontSize, (H - blockH) / 2 + fontSize * 0.8);

  const titleTspans = lines
    .map(
      (ln, i) =>
        `<tspan x="${MARGIN}" y="${top + i * lineH}">${esc(ln)}</tspan>`,
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="cov" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${cov}" stop-opacity="0.35"/>
      <stop offset="0.6" stop-color="${cov}" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
      <path d="M52 0H0V52" fill="none" stroke="${border}" stroke-opacity="0.5" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#cov)"/>
  <text x="${MARGIN}" y="${MARGIN + 6}" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="24" letter-spacing="8" fill="${muted}">XRACK &#183; BLOG</text>
  <text font-family="Geist, 'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="${fontSize}" fill="${fg}" letter-spacing="-2">${titleTspans}</text>
  <text x="${MARGIN}" y="${H - MARGIN}" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="30" font-weight="600" letter-spacing="7" fill="${cov}">${esc(tag.toUpperCase())}</text>
</svg>`;
}

export async function renderOgPng(input: OgInput): Promise<Buffer> {
  return sharp(Buffer.from(buildSvg(input))).png().toBuffer();
}
