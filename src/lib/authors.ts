// Author / executive registry — the source of truth for bylines, profile
// pages, the press kit, and Person JSON-LD (E-E-A-T). Add real profile URLs to
// `sameAs` as they exist.
export interface Author {
  slug: string;
  name: string;
  roleEn: string;
  roleTr: string;
  bioEn: string;
  bioTr: string;
  email?: string;
  sameAs: string[];
}

export const AUTHORS: Record<string, Author> = {
  "dogan-dursun": {
    slug: "dogan-dursun",
    name: "Vincent E. Dogan Dursun",
    roleEn: "CEO & Co-Founder",
    roleTr: "CEO ve Kurucu Ortak",
    bioEn:
      "Vincent E. Dogan Dursun is the CEO and co-founder of XRack Technologies, where he leads the development of a sovereign cognitive runtime for regulated enterprise AI — turning agentic systems from opaque black boxes into auditable glass boxes. He writes here about the engineering, research, and field notes behind building an observable agentic harness.",
    bioTr:
      "Vincent E. Dogan Dursun, XRack Technologies'in CEO'su ve kurucu ortağıdır; regüle kurumsal yapay zekâ için bağımsız bir bilişsel çalışma zamanının geliştirilmesine öncülük eder — agentic sistemleri opak kara kutulardan denetlenebilir cam kutulara dönüştürür. Burada, gözlemlenebilir bir agentic harness inşa etmenin ardındaki mühendislik, araştırma ve saha notlarını yazıyor.",
    email: "dogandursun@xrack.io",
    sameAs: [
      "https://xrack.io",
      "https://www.linkedin.com/in/egedogandursun",
      "https://github.com/egedursun",
    ],
  },
  "huseyin-ersay": {
    slug: "huseyin-ersay",
    name: "Hüseyin Ersay",
    roleEn: "Co-Founder · Lawyer · AI regulation & governance",
    roleTr: "Kurucu Ortak · Avukat · Yapay zekâ regülasyonu ve yönetişimi",
    bioEn:
      "Hüseyin Ersay is a co-founder of XRack Technologies and a lawyer specializing in AI regulation and governance. He shapes how XRack's sovereign cognitive runtime meets the legal and compliance demands of regulated industries — from auditability and accountability to data sovereignty — so that what the runtime proves also stands up to scrutiny.",
    bioTr:
      "Hüseyin Ersay, XRack Technologies'in kurucu ortağı ve yapay zekâ regülasyonu ile yönetişimi alanında uzman bir avukattır. XRack'in bağımsız bilişsel çalışma zamanının, regüle sektörlerin hukuki ve uyum gereksinimlerini — denetlenebilirlikten hesap verebilirliğe ve veri egemenliğine kadar — nasıl karşıladığını şekillendirir; böylece çalışma zamanının kanıtladığı şey denetime de dayanır.",
    sameAs: ["https://www.linkedin.com/in/huseyinersay/"],
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
