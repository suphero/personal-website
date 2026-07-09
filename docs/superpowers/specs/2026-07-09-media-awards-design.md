# Medya & Ödüller Sayfaları — Tasarım Dokümanı

**Tarih:** 2026-07-09
**Durum:** Onay bekliyor

## Amaç

Kişisel web sitesine iki yeni sayfa eklemek:

1. **Medya** — Harun Sokullu hakkında basında çıkan haberler.
2. **Ödüller** — Fellowship / üyelikler ve jüri üyelikleri.

Ayrıca mevcut bir eksik giderilecek: navigasyon menüsü şu an mobilde tamamen gizli
(`hidden md:flex`). Bu iş kapsamında **mobil hamburger menü** eklenecek, böylece
yeni ve mevcut tüm sayfalar mobilde de erişilebilir olacak.

## Mevcut desen (uyulacak)

- **Veri / metin ayrımı:** Dile bağımsız yapısal veri (tarih, URL, key) `lib/*.ts`
  içinde; çevrilebilir metinler `messages/tr.json` + `messages/en.json` içinde aynı
  key'lerle. Referans: `lib/experience.ts` + `experiences.*` çeviri bloğu.
- **Sayfa kabuğu:** `container mx-auto px-4 py-16 max-w-4xl`, başlık (`h1`) +
  açıklama, kartlar `bg-card border border-border rounded-lg`.
- **Navigasyon:** `components/Header.tsx` içindeki `navItems` dizisi + `header.*`
  çeviri key'leri.

## Veri modeli

### `lib/media.ts` (gruplu model)

Aynı haber birden çok yayın organında klonlanabildiği için **1 haber = 1 kart,
altında çıktığı yayınlar link olarak** modeli kullanılır.

```ts
export type MediaOutlet = { name: string; url: string };

export type MediaStory = {
  key: string;             // çeviri anahtarı (messages: media.stories.<key>)
  date: string;            // "YYYY-MM"
  outlets: MediaOutlet[];  // haberin çıktığı yayın organları
};

export const mediaStories: MediaStory[] = [ /* aşağıdaki içerik */ ];
```

### `lib/awards.ts` (esnek başarı modeli)

```ts
export type Honor = {
  key: string;                        // çeviri anahtarı (messages: awards.honors.<key>)
  section: "fellowship" | "jury";     // hangi bölümde render edilecek
  organization: string;               // kurum / organizatör (dile bağımsız marka adı)
  organizationUrl?: string;           // kurum/etkinlik linki
  date: string;                       // "YYYY" (üyelik) veya "YYYY-MM" (etkinlik)
  current?: boolean;                  // süregelen üyelik → "– Devam Ediyor / Present"
};

export const honors: Honor[] = [ /* aşağıdaki içerik */ ];
```

> Not: Kesinleşmemiş kayıtlar (IET Fellowship değerlendirmesi, DxRay Hack daveti)
> bu aşamada **dahil edilmiyor**. Model, ileride bir `status` alanıyla kolayca
> genişletilebilir ancak şimdilik YAGNI gereği eklenmiyor.

### `lib/date.ts` (ortak yardımcı — DRY)

`experience/page.tsx` içindeki satır-içi `formatDate` mantığı ortak bir yardımcıya
taşınır ve üç sayfa (deneyim, medya, ödüller) tarafından kullanılır. Ay/yıl ve
yalnız-yıl ("2026") girdilerini destekler.

```ts
// t: next-intl useTranslations() örneği (months.* key'lerini okur)
export function formatMonthYear(date: string, t: (key: string) => string): string {
  const [year, month] = date.split("-");
  if (!month) return year;                       // yalnız yıl → "2026"
  const monthKeys = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  return `${t(`months.${monthKeys[parseInt(month) - 1]}`)} ${year}`;
}
```

`experience/page.tsx` kendi `formatDate`'ini bu yardımcıyla değiştirir (davranış
korunur).

## Sayfa yerleşimleri

### `app/[locale]/media/page.tsx`

- `"use client"` + `useTranslations()` (deneyim/projeler deseni gibi).
- Başlık + açıklama (`mediaPage.title`, `mediaPage.description`).
- `mediaStories.map(...)` → her haber bir kart:
  - Tarih (küçük, `text-primary`) — `formatMonthYear(story.date, t)`
  - Başlık `h3` — `t('media.stories.<key>.title')`
  - "Çıktığı yerler:" (`mediaPage.appearedIn`) altında `outlets` → dış-link ikonlu
    pill/rozet linkler (`target="_blank" rel="noopener noreferrer"`).

### `app/[locale]/awards/page.tsx`

- `"use client"` + `useTranslations()`.
- Başlık + açıklama (`awardsPage.title`, `awardsPage.description`).
- İki bölüm; her biri bir alt-başlık + o bölüme ait `honors` kartları:
  1. **Fellowship & Üyelikler** (`awardsPage.sections.fellowship`) — `section === "fellowship"`
  2. **Jüri Üyelikleri** (`awardsPage.sections.jury`) — `section === "jury"`
- Kart içeriği:
  - Başlık `h3` — `t('awards.honors.<key>.title')`
  - Kurum linki — `organization` (+ `organizationUrl` varsa `<a>`)
  - Tarih — `formatMonthYear(date, t)`; `current` ise "– {awardsPage.present}"
  - Kısa açıklama — `t('awards.honors.<key>.description')`

## Navigasyon (`components/Header.tsx`)

- `navItems`'a eklenir: `{ href: "/media", labelKey: "media" }`,
  `{ href: "/awards", labelKey: "awards" }`.
- **Mobil menü:** Sağ üstte bir hamburger butonu (`Menu`/`X` — `lucide-react`).
  Açıldığında `navItems` bağlantılarını dikey listeleyen bir panel gösterir.
  - `useState` ile açık/kapalı durumu; bir bağlantıya tıklanınca kapanır.
  - Masaüstünde gizli (`md:hidden`), mevcut `hidden md:flex` liste korunur.
  - Erişilebilirlik: `aria-label`, `aria-expanded`.

## i18n (`messages/tr.json` + `messages/en.json`)

Eklenecek key'ler (her iki dosyada):

- `header.media`, `header.awards`
- `mediaPage`: `title`, `description`, `appearedIn`
- `media.stories.<key>.title` (ve gerekiyorsa `.description`)
- `awardsPage`: `title`, `description`, `present`, `sections.fellowship`,
  `sections.jury`
- `awards.honors.<key>.title` + `awards.honors.<key>.description`

## İçerik

### Medya

**Haber `banking_ai`** — tarih `2026-06`
- TR başlık: "Bankacılıkta Yapay Zeka Dönüşümü: Finansal Arama Sistemleri"
- EN başlık: "AI Transformation in Banking: Financial Search Systems"
- Yayın organları:
  1. Haberler.com — https://www.haberler.com/haberler/bankacilikta-yapay-zeka-donusumu-finansal-arama-20006184-haberi
  2. Son Dakika — https://www.sondakika.com/haber/haber-bankacilikta-yapay-zeka-donusumu-finansal-arama-20006185
  3. Ünlü Ajansı — https://unluajansi.com.tr/bankacilikta-yapay-zeka-donusumu-finansal-arama-sistemleri-musteri-deneyimini-nasil-yeniden-tanimliyor
  4. Kanun Masası — https://kanunmasasi.com.tr/bankacilikta-yapay-zeka-donusumu-finansal-arama-sistemleri-musteri-deneyimini-nasil-yeniden-tanimliyor/
  5. Vizyon Ajansı — https://vizyonajansi.com.tr/bankacilikta-yapay-zeka-donusumu-finansal-arama-sistemleri-musteri-deneyimini-nasil-yeniden-tanimliyor/

### Ödüller — Fellowship & Üyelikler

**`raptors_fellow`** — Hackathon Raptors, https://raptors.dev, `2026`, current
- Başlık: "Fellow" / "Fellow"
- Açıklama (TR): "Küresel geliştirici ekosisteminde teknik uzmanlık ve katkı
  temelinde seçici olarak verilen Fellow statüsü."
- Açıklama (EN): "Selectively granted Fellow status within the global developer
  ecosystem, based on demonstrated technical expertise and contribution."

**`ieee_member`** — IEEE, https://www.ieee.org, `2026`, current
- Başlık: "Profesyonel Üye" / "Professional Member"
- Açıklama (TR): "Dünyanın en büyük teknik profesyonel kuruluşu IEEE'de
  profesyonel üyelik."
- Açıklama (EN): "Professional membership in IEEE, the world's largest technical
  professional organization."

### Ödüller — Jüri Üyelikleri

**`sudo_make_world`** — Hackathon Raptors, https://sudomakeworld.com, `2026-02`
- Başlık: "sudo make world Hackathon" / "sudo make world Hackathon"
- Açıklama (TR): "Hackathon Raptors tarafından düzenlenen 72 saatlik uluslararası
  online hackathon'da resmî jüri üyeliği."
- Açıklama (EN): "Official jury member at the 72-hour international online
  hackathon organized by Hackathon Raptors."

**`garage_inference`** — Garage Inference, https://garageinference.com, `2026-05`
- Başlık: "Garage Inference AI Hackathon" / "Garage Inference AI Hackathon"
- Açıklama (TR): "Yapay zeka odaklı uluslararası bir hackathon'da jüri üyeliği."
- Açıklama (EN): "Jury member at an international AI-focused hackathon."

**`cursor_alttab`** — ALT+TAB & Cursor Istanbul, (link yok), `2026-06`
- Başlık: "Cursor × ALT+TAB Hackathon" / "Cursor × ALT+TAB Hackathon"
- Açıklama (TR): "Güngören Belediyesi verileriyle kamu yararına yapay zekâ
  çözümleri geliştirilen yüz yüze hackathon'da davetli jüri üyeliği."
- Açıklama (EN): "Invited jury member at an in-person hackathon developing
  public-interest AI solutions using municipal field data."

## Kapsam dışı (YAGNI)

- IET Fellowship ve DxRay Hack kayıtları (kesinleşince eklenir).
- Yayın organı logoları / haber görselleri.
- Uzun açıklama metinlerinin tam hâlleri (kartlarda sade özet kullanılır).
- Tür rozetleri (TV/Yazı/Podcast) — mevcut içerik hepsi yazılı haber.

## Doğrulama

- `npm run build` hatasız geçer (statik export; `out/` üretilir).
- `npm run lint` temiz.
- TR ve EN'de `/media` ve `/awards` sayfaları render olur; tüm çeviri key'leri
  karşılığını bulur (eksik key uyarısı yok).
- Masaüstü ve mobil navigasyondan iki yeni sayfaya da ulaşılır.
- Tüm dış linkler doğru URL'e, yeni sekmede açılır.

## Açık nokta

- Ödüller sayfasının başlık/nav etiketi TR "Ödüller" / EN "Awards" olarak
  varsayıldı; içerik (fellowship + jüri) için "Başarılar / Honors" da uygun.
  İnceleme sırasında değiştirilebilir.
