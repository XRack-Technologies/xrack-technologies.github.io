export const SITE = {
  title: "XRack Blog",
  tagline: "Sovereign Cognitive Runtime",
  description:
    "Engineering, research, and field notes from the team building the observable agentic harness.",
  author: "Vincent E. Dogan Dursun - CEO & Co-Founder",
  homepage: "https://xrack.io",
  cta: "https://calendly.com/dogandursun-xrack/20min",
  twitter: "",
};

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/105097977",
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
    "Gözlemlenebilir agentic harness'ı geliştiren ekibin mühendislik, araştırma ve saha notları.",
};

const GA_ENV = (import.meta.env.PUBLIC_GA_ID ?? "").trim();
export const GA_ID = GA_ENV || (import.meta.env.PROD ? "G-C185FJWPRX" : "");

export const GOOGLE_VERIFICATION = (import.meta.env.PUBLIC_GOOGLE_VERIFICATION ?? "").trim();
export const BING_VERIFICATION = (import.meta.env.PUBLIC_BING_VERIFICATION ?? "").trim();
const PROD = import.meta.env.PROD;
export const GISCUS = {
  repo:
    (import.meta.env.PUBLIC_GISCUS_REPO ?? "").trim() ||
    (PROD ? "XRack-Technologies/xrack-technologies.github.io" : ""),
  repoId: (import.meta.env.PUBLIC_GISCUS_REPO_ID ?? "").trim() || (PROD ? "R_kgDOTSJspQ" : ""),
  category: (import.meta.env.PUBLIC_GISCUS_CATEGORY ?? "").trim() || "Announcements",
  categoryId:
    (import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ?? "").trim() ||
    (PROD ? "DIC_kwDOTSJspc4DA1FK" : ""),
};
export const GISCUS_ENABLED = !!(GISCUS.repo && GISCUS.repoId && GISCUS.categoryId);

const BASE = import.meta.env.BASE_URL;

export function href(path = ""): string {
  const clean = String(path).replace(/^\/+/, "");
  return (BASE.endsWith("/") ? BASE : BASE + "/") + clean;
}

const DATE_OPTS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", DATE_OPTS);
}

export function formatDateTr(date: Date): string {
  return date.toLocaleDateString("tr-TR", DATE_OPTS);
}
