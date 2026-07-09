// Author registry — the source of truth for bylines, profile pages, and
// Person JSON-LD (E-E-A-T). Add real profile URLs to `sameAs` as they exist.
export interface Author {
  slug: string;
  name: string;
  role: string;
  bioEn: string;
  bioTr: string;
  email?: string;
  sameAs: string[];
}

export const AUTHORS: Record<string, Author> = {
  "dogan-dursun": {
    slug: "dogan-dursun",
    name: "Vincent E. Dogan Dursun",
    role: "CEO & Co-Founder, XRack Technologies",
    bioEn:
      "Vincent E. Dogan Dursun is the CEO and co-founder of XRack Technologies, where he leads the development of a sovereign cognitive runtime for regulated enterprise AI — turning agentic systems from opaque black boxes into auditable glass boxes. He writes here about the engineering, research, and field notes behind building an observable agentic harness.",
    bioTr:
      "Vincent E. Dogan Dursun, XRack Technologies'in CEO'su ve kurucu ortağıdır; regüle kurumsal yapay zekâ için bağımsız bir bilişsel çalışma zamanının geliştirilmesine öncülük eder — agentic sistemleri opak kara kutulardan denetlenebilir cam kutulara dönüştürür. Burada, gözlemlenebilir bir agentic harness inşa etmenin ardındaki mühendislik, araştırma ve saha notlarını yazıyor.",
    email: "dogandursun@xrack.io",
    // Add LinkedIn / X / GitHub profile URLs here to strengthen sameAs.
    sameAs: ["https://xrack.io"],
  },
};

export const DEFAULT_AUTHOR = "dogan-dursun";

// Resolve a post's free-text `author` field to a registered profile:
// exact slug, name match, or the name prefix before a " - " role suffix.
export function resolveAuthor(name?: string): Author {
  if (name) {
    const byId = AUTHORS[name];
    if (byId) return byId;
    const bare = name.split(" - ")[0].trim().toLowerCase();
    const match = Object.values(AUTHORS).find(
      (a) => a.name.toLowerCase() === bare || name.toLowerCase().includes(a.name.toLowerCase()),
    );
    if (match) return match;
  }
  return AUTHORS[DEFAULT_AUTHOR];
}
