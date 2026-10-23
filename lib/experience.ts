export type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  dateStart: string;
  dateEnd?: string;
  description?: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    title: "Backend Team Lead",
    company: "Ozan Elektronik Para",
    companyUrl: "https://www.ozan.com",
    dateStart: "2024-02",
    current: true,
    description: "Leading backend development team for fintech solutions",
  },
  {
    title: "Senior Backend Developer",
    company: "Ozan Elektronik Para",
    companyUrl: "https://www.ozan.com",
    dateStart: "2022-12",
    dateEnd: "2024-02",
    description:
      "Developed and maintained backend services for fintech solutions",
  },
  {
    title: "Software Architect",
    company: "Akbank",
    companyUrl: "https://www.akbank.com",
    dateStart: "2022-10",
    dateEnd: "2022-12",
    description:
      "Owned the backend architecture of the mobile search and chatbot platform; technical hiring and architectural governance",
  },
  {
    title: "Senior Software Specialist",
    company: "Akbank",
    companyUrl: "https://www.akbank.com",
    dateStart: "2020-11",
    dateEnd: "2022-10",
    description:
      "Developed mobile search functionality and chatbot for Turkey's leading bank",
  },
  {
    title: "Senior Software Specialist",
    company: "Doğuş Technology",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2019-02",
    dateEnd: "2020-10",
    description: "Fleet management: VDF Filo (second phase) and the new D-Filo platform",
  },
  {
    title: "Software Specialist",
    company: "Doğuş Technology",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2015-07",
    dateEnd: "2019-01",
    description:
      "VDF Filo fleet management ERP, Doğuş Construction ERP, and the ntv.com.tr / ntvspor.net websites",
  },
  {
    title: "Software Engineer",
    company: "Doğuş Technology",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2013-07",
    dateEnd: "2015-06",
    description: "Fleet Management ERP Application for LeasePlan Turkey",
  },
];

export function formatExperienceDate(date: string, current?: boolean): string {
  if (current) return "Present";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}
