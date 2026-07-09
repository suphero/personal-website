// t: next-intl useTranslations() örneği (namespace'siz) — months.* key'lerini okur
export function formatMonthYear(
  date: string,
  t: (key: string) => string
): string {
  const [year, month] = date.split("-");
  if (!month) return year; // yalnız yıl → "2026"
  const monthKeys = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec",
  ];
  return `${t(`months.${monthKeys[parseInt(month) - 1]}`)} ${year}`;
}

// Sıralama için karşılaştırılabilir sayı: "2026-06" → 202606, yalnız-yıl "2026" → 202600
export function dateSortKey(date: string): number {
  const [year, month] = date.split("-");
  return parseInt(year) * 100 + (month ? parseInt(month) : 0);
}
