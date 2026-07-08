export const SITE = {
  title: "XRack Blog",
  tagline: "Sovereign Cognitive Runtime",
  description:
    "Engineering, research, and field notes from the team building the observable agentic harness.",
  author: "Vincent E. Dogan Dursun - CEO & Co-Founder",
  homepage: "https://xrack.io",
  cta: "https://calendly.com/dogandursun-xrack/20min",
};

export const NAV = [
  { label: "Engineering", label_tr: "Mühendislik", tag: "engineering" },
  { label: "Field Notes", label_tr: "Saha Notları", tag: "field-notes" },
  { label: "Research", label_tr: "Araştırma", tag: "research" },
  { label: "Security", label_tr: "Güvenlik", tag: "security" },
  { label: "Vision", label_tr: "Vizyon", tag: "vision" },
];

export const SITE_TR = {
  description:
    "Gözlemlenebilir agentic harness'ı inşa eden ekipten mühendislik, araştırma ve saha notları.",
};

const BASE = import.meta.env.BASE_URL;

export function href(path = ""): string {
  const clean = String(path).replace(/^\/+/, "");
  return (BASE.endsWith("/") ? BASE : BASE + "/") + clean;
}

const DATE_OPTS: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", DATE_OPTS);
}

export function formatDateTr(date: Date): string {
  return date.toLocaleDateString("tr-TR", DATE_OPTS);
}
