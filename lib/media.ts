export type MediaOutlet = { name: string; url: string };

export type MediaStory = {
  key: string; // çeviri anahtarı → media.stories.<key>
  date: string; // "YYYY-MM"
  outlets: MediaOutlet[]; // haberin çıktığı yayın organları
};

export const mediaStories: MediaStory[] = [
  {
    key: "banking_ai",
    date: "2026-06",
    outlets: [
      {
        name: "Haberler.com",
        url: "https://www.haberler.com/haberler/bankacilikta-yapay-zeka-donusumu-finansal-arama-20006184-haberi",
      },
      {
        name: "Son Dakika",
        url: "https://www.sondakika.com/haber/haber-bankacilikta-yapay-zeka-donusumu-finansal-arama-20006185",
      },
      {
        name: "Ünlü Ajansı",
        url: "https://unluajansi.com.tr/bankacilikta-yapay-zeka-donusumu-finansal-arama-sistemleri-musteri-deneyimini-nasil-yeniden-tanimliyor",
      },
      {
        name: "Kanun Masası",
        url: "https://kanunmasasi.com.tr/bankacilikta-yapay-zeka-donusumu-finansal-arama-sistemleri-musteri-deneyimini-nasil-yeniden-tanimliyor/",
      },
      {
        name: "Vizyon Ajansı",
        url: "https://vizyonajansi.com.tr/bankacilikta-yapay-zeka-donusumu-finansal-arama-sistemleri-musteri-deneyimini-nasil-yeniden-tanimliyor/",
      },
    ],
  },
];
