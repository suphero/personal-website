export type Honor = {
  key: string; // çeviri anahtarı → awards.honors.<key>
  section: "fellowship" | "jury"; // hangi bölümde render edilecek
  organization: string; // kurum / organizatör (dile bağımsız marka adı)
  organizationUrl?: string;
  date: string; // "YYYY" (üyelik) veya "YYYY-MM" (etkinlik)
  current?: boolean; // süregelen üyelik → "– Devam Ediyor / Present"
};

export const honors: Honor[] = [
  {
    key: "raptors_fellow",
    section: "fellowship",
    organization: "Hackathon Raptors",
    organizationUrl: "https://raptors.dev",
    date: "2026",
    current: true,
  },
  {
    key: "scrs_fellow",
    section: "fellowship",
    organization: "Soft Computing Research Society",
    organizationUrl: "https://scrs.in/scrs-fellow/1954",
    date: "2026",
    current: true,
  },
  {
    key: "ieee_member",
    section: "fellowship",
    organization: "IEEE",
    organizationUrl: "https://www.ieee.org",
    date: "2026",
    current: true,
  },
  {
    key: "sudo_make_world",
    section: "jury",
    organization: "Hackathon Raptors",
    organizationUrl: "https://sudomakeworld.com",
    date: "2026-02",
  },
  {
    key: "garage_inference",
    section: "jury",
    organization: "Garage Inference",
    organizationUrl: "https://garageinference.com",
    date: "2026-05",
  },
  {
    key: "cursor_alttab",
    section: "jury",
    organization: "ALT+TAB & Cursor Istanbul",
    date: "2026-06",
  },
];
