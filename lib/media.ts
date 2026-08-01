export type MediaOutlet = { name: string; url: string };

export type MediaStory = {
  key: string; // çeviri anahtarı → media.stories.<key>
  date: string; // "YYYY-MM"
  outlets: MediaOutlet[]; // haberin çıktığı yayın organları
};

export const mediaStories: MediaStory[] = [
  {
    key: "banking_software_design",
    date: "2026-08",
    outlets: [
      {
        name: "Haber7",
        url: "https://www.haber7.com/teknoloji/haber/3647815-bankacilik-yazilimlarinda-kritik-tasarim-hatalari",
      },
    ],
  },
  {
    key: "payment_security",
    date: "2026-07",
    outlets: [
      {
        name: "Sözcü",
        url: "https://www.sozcu.com.tr/dijital-odeme-sistemlerinde-guvenlik-onlemi-p335763",
      },
      {
        name: "Haber Vakti",
        url: "https://haber-vakti.com.tr/haber/dijital-odeme-sistemlerinde-guvenlik-onlemi-86603",
      },
    ],
  },
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
