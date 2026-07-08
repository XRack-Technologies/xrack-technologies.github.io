export const SITE = {
  title: "XRack Blog",
  description:
    "Engineering, research, and field notes from the team building the observable agentic harness.",
  author: "Ege Dogan Dursun",
  homepage: "https://xrack.io",
};

export const NAV = [
  { label: "Engineering", tag: "engineering" },
  { label: "Field Notes", tag: "field-notes" },
  { label: "Research", tag: "research" },
  { label: "Security", tag: "security" },
  { label: "Vision", tag: "vision" },
];

const BASE = import.meta.env.BASE_URL;

export function href(path = ""): string {
  const clean = String(path).replace(/^\/+/, "");
  return (BASE.endsWith("/") ? BASE : BASE + "/") + clean;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
