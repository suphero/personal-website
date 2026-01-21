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
    dateStart: "2022-12",
    current: true,
    description: "Leading backend development team for fintech solutions",
  },
  {
    title: "Mobile Search & Chatbot Developer",
    company: "Akbank",
    companyUrl: "https://www.akbank.com",
    dateStart: "2020-11",
    dateEnd: "2022-12",
    description:
      "Developed mobile search functionality and chatbot for Turkey's leading bank",
  },
  {
    title: "Senior Software Developer",
    company: "Doğuş Technology (VDF Filo)",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2018-12",
    dateEnd: "2020-10",
    description: "Fleet Management ERP Application development",
  },
  {
    title: "Software Developer",
    company: "Doğuş Technology (NTV)",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2018-09",
    dateEnd: "2018-12",
    description:
      "Worked on websites of Turkish nationwide television news & sport channels ntv.com.tr & ntvspor.net",
  },
  {
    title: "Software Developer",
    company: "Doğuş Technology (Doğuş Construction)",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2018-01",
    dateEnd: "2018-09",
    description: "Construction ERP Application development",
  },
  {
    title: "Software Developer",
    company: "Doğuş Technology (VDF Filo)",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2016-04",
    dateEnd: "2018-01",
    description: "Fleet Management ERP Application development",
  },
  {
    title: "Junior Software Developer",
    company: "Doğuş Technology (LeasePlan)",
    companyUrl: "https://www.d-teknoloji.com.tr",
    dateStart: "2013-07",
    dateEnd: "2016-04",
    description: "Fleet Management ERP Application for LeasePlan Turkey",
  },
];

export function formatExperienceDate(date: string, current?: boolean): string {
  if (current) return "Present";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}
