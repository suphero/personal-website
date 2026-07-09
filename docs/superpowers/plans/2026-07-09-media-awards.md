# Medya & Ödüller Sayfaları Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Kişisel siteye "Medya" ve "Ödüller" sayfalarını ekle; navigasyona (masaüstü + yeni mobil menü) bağla; iki dilde çalışsın.

**Architecture:** Mevcut desen korunur — dile bağımsız yapısal veri `lib/*.ts` içinde, çevrilebilir metin `messages/{tr,en}.json` içinde aynı key'lerle. Her `[locale]` sayfası `"use client"` bir bileşen olup `useTranslations()` kullanır; statik export için locale'ler `app/[locale]/layout.tsx` içindeki `generateStaticParams` ile üretilir. Ortak bir `lib/date.ts` ay/yıl formatlaması üç sayfada paylaşılır.

**Tech Stack:** Next.js 16 (App Router, `output: export`), next-intl 4, React 19, Tailwind CSS 4, lucide-react ikonlar.

## Global Constraints

- Test koşucusu YOK. Her görevin doğrulaması: `npm run build` (hatasız) + `npm run lint` (temiz) + gerektiğinde `npm run dev` ile `/tr/...` ve `/en/...` görsel kontrol.
- `messages/tr.json` ve `messages/en.json` **daima senkron**: eklenen her key iki dosyada da bulunmalı (eksik key = build/runtime uyarısı).
- Dile bağımsız veri (tarih, URL, marka adı, key) `lib/*.ts` içinde; çevrilebilir metin messages dosyalarında.
- Tüm dış bağlantılar: `target="_blank" rel="noopener noreferrer"`.
- Tailwind token'ları mevcut desenden: `bg-card`, `border-border`, `text-foreground`, `text-muted-foreground`, `text-primary`, `bg-secondary`, `text-secondary-foreground`, `hover:bg-accent`.
- Sayfa kabuğu: `container mx-auto px-4 py-16 max-w-4xl`, `h1` başlık + `p` açıklama.
- Yeni `[locale]` sayfaları `"use client"` + `useTranslations()`; sayfa düzeyinde `generateStaticParams`/`setRequestLocale` GEREKMEZ (layout hallediyor — mevcut experience/projects sayfaları gibi).
- Kesinleşmemiş kayıtlar (IET Fellowship, DxRay Hack) DAHİL EDİLMEZ.

---

### Task 1: Ortak tarih yardımcısı (`lib/date.ts`) + deneyim sayfası refaktörü

**Files:**
- Create: `lib/date.ts`
- Modify: `app/[locale]/experience/page.tsx:20-24` (satır-içi `formatDate` → ortak yardımcı)

**Interfaces:**
- Produces: `formatMonthYear(date: string, t: (key: string) => string): string` — `"2026-06"` → `"Haz 2026"` (t, `months.*` key'lerini okur); `"2026"` (aysız) → `"2026"`.

- [ ] **Step 1: `lib/date.ts` oluştur**

```ts
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
```

- [ ] **Step 2: `experience/page.tsx` içindeki satır-içi `formatDate`'i kaldır, ortak yardımcıyı kullan**

Dosyanın üstüne import ekle (diğer importların yanına):

```ts
import { formatMonthYear } from "@/lib/date";
```

Şu bloğu (satır ~20-24) SİL:

```ts
  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const monthKey = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"][parseInt(month) - 1];
    return `${t(`months.${monthKey}`)} ${year}`;
  };
```

Kullanım yerlerini değiştir (satır ~59-60):
- `formatDate(exp.dateStart)` → `formatMonthYear(exp.dateStart, t)`
- `formatDate(exp.dateEnd!)` → `formatMonthYear(exp.dateEnd!, t)`

- [ ] **Step 3: Build + lint**

Run: `npm run build && npm run lint`
Expected: Build hatasız tamamlanır (`out/` üretilir), lint temiz.

- [ ] **Step 4: Görsel doğrulama**

Run: `npm run dev`, `http://localhost:3000/tr/experience` ve `/en/experience` aç.
Expected: Tarihler önceki gibi görünür (örn. "Tem 2023 - Devam Ediyor"). Davranış değişmedi.

- [ ] **Step 5: Commit**

```bash
git add lib/date.ts "app/[locale]/experience/page.tsx"
git commit -m "refactor: extract shared formatMonthYear date helper"
```

---

### Task 2: Medya sayfası (`/media`)

**Files:**
- Create: `lib/media.ts`
- Create: `app/[locale]/media/page.tsx`
- Modify: `messages/tr.json` (yeni key'ler)
- Modify: `messages/en.json` (yeni key'ler)

**Interfaces:**
- Consumes: `formatMonthYear` (Task 1).
- Produces: `mediaStories: MediaStory[]`; `MediaStory = { key: string; date: string; outlets: MediaOutlet[] }`; `MediaOutlet = { name: string; url: string }`.
- Çeviri key'leri: `mediaPage.{title,description,appearedIn}`, `media.stories.<key>.title`, `header.media`.

- [ ] **Step 1: `lib/media.ts` oluştur**

```ts
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
```

- [ ] **Step 2: `messages/tr.json` içine key'leri ekle**

`header` nesnesine (mevcut `"projects"` satırından sonra) ekle:

```json
    "media": "Medya",
    "awards": "Ödüller",
    "menu": "Menü",
```

Üst düzeyde (örn. `experiencePage`/`projectsPage` yakınına) yeni bloklar ekle:

```json
  "mediaPage": {
    "title": "Medya",
    "description": "Çalışmalarım ve projelerimle ilgili basında çıkan haberler.",
    "appearedIn": "Çıktığı yerler:"
  },
  "media": {
    "stories": {
      "banking_ai": {
        "title": "Bankacılıkta Yapay Zeka Dönüşümü: Finansal Arama Sistemleri"
      }
    }
  },
```

> Not: `awards` ve `awardsPage` key'leri Task 3'te eklenecek; `header.awards`/`header.menu` şimdiden eklendi çünkü Header Task 4'te ikisini de kullanacak.

- [ ] **Step 3: `messages/en.json` içine aynı key'leri (İngilizce) ekle**

`header` nesnesine:

```json
    "media": "Media",
    "awards": "Awards",
    "menu": "Menu",
```

Üst düzeyde:

```json
  "mediaPage": {
    "title": "Media",
    "description": "Press coverage about my work and projects.",
    "appearedIn": "Appeared in:"
  },
  "media": {
    "stories": {
      "banking_ai": {
        "title": "AI Transformation in Banking: Financial Search Systems"
      }
    }
  },
```

- [ ] **Step 4: `app/[locale]/media/page.tsx` oluştur**

```tsx
"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { formatMonthYear } from "@/lib/date";
import { mediaStories } from "@/lib/media";

export default function MediaPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {t("mediaPage.title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t("mediaPage.description")}
        </p>
      </div>

      <div className="space-y-8">
        {mediaStories.map((story) => (
          <article
            key={story.key}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-sm text-primary font-medium mb-2">
              {formatMonthYear(story.date, t)}
            </div>
            <h2 className="text-xl font-bold mb-4 text-foreground">
              {t(`media.stories.${story.key}.title`)}
            </h2>
            <div className="text-sm text-muted-foreground mb-2">
              {t("mediaPage.appearedIn")}
            </div>
            <div className="flex flex-wrap gap-2">
              {story.outlets.map((outlet) => (
                <a
                  key={outlet.url}
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full border border-border bg-secondary text-secondary-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {outlet.name}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Build + lint**

Run: `npm run build && npm run lint`
Expected: Hatasız. `out/tr/media/index.html` ve `out/en/media/index.html` üretilir.

- [ ] **Step 6: Görsel doğrulama**

Run: `npm run dev`, `http://localhost:3000/tr/media` ve `/en/media` aç.
Expected: Tek haber kartı; "Haz 2026" tarihi; başlık; 5 yayın rozeti tıklanınca doğru URL'e yeni sekmede gider. Eksik-çeviri (`media.stories...`) uyarısı yok.

- [ ] **Step 7: Commit**

```bash
git add lib/media.ts "app/[locale]/media/page.tsx" messages/tr.json messages/en.json
git commit -m "feat: add media (press coverage) page"
```

---

### Task 3: Ödüller sayfası (`/awards`)

**Files:**
- Create: `lib/awards.ts`
- Create: `app/[locale]/awards/page.tsx`
- Modify: `messages/tr.json` (yeni key'ler)
- Modify: `messages/en.json` (yeni key'ler)

**Interfaces:**
- Consumes: `formatMonthYear` (Task 1).
- Produces: `honors: Honor[]`; `Honor = { key: string; section: "fellowship" | "jury"; organization: string; organizationUrl?: string; date: string; current?: boolean }`.
- Çeviri key'leri: `awardsPage.{title,description,present}`, `awardsPage.sections.{fellowship,jury}`, `awards.honors.<key>.{title,description}`, `header.awards` (Task 2'de eklendi).

- [ ] **Step 1: `lib/awards.ts` oluştur**

```ts
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
```

- [ ] **Step 2: `messages/tr.json` içine key'leri ekle**

Üst düzeyde ekle:

```json
  "awardsPage": {
    "title": "Ödüller",
    "description": "Fellowship'ler, profesyonel üyelikler ve jüri üyelikleri.",
    "present": "Devam Ediyor",
    "sections": {
      "fellowship": "Fellowship & Üyelikler",
      "jury": "Jüri Üyelikleri"
    }
  },
  "awards": {
    "honors": {
      "raptors_fellow": {
        "title": "Fellow",
        "description": "Küresel geliştirici ekosisteminde teknik uzmanlık ve katkı temelinde seçici olarak verilen Fellow statüsü."
      },
      "ieee_member": {
        "title": "Profesyonel Üye",
        "description": "Dünyanın en büyük teknik profesyonel kuruluşu IEEE'de profesyonel üyelik."
      },
      "sudo_make_world": {
        "title": "sudo make world Hackathon",
        "description": "Hackathon Raptors tarafından düzenlenen 72 saatlik uluslararası online hackathon'da resmî jüri üyeliği."
      },
      "garage_inference": {
        "title": "Garage Inference AI Hackathon",
        "description": "Yapay zeka odaklı uluslararası bir hackathon'da jüri üyeliği."
      },
      "cursor_alttab": {
        "title": "Cursor × ALT+TAB Hackathon",
        "description": "Güngören Belediyesi verileriyle kamu yararına yapay zekâ çözümleri geliştirilen yüz yüze hackathon'da davetli jüri üyeliği."
      }
    }
  },
```

- [ ] **Step 3: `messages/en.json` içine aynı key'leri (İngilizce) ekle**

```json
  "awardsPage": {
    "title": "Awards",
    "description": "Fellowships, professional memberships, and jury roles.",
    "present": "Present",
    "sections": {
      "fellowship": "Fellowships & Memberships",
      "jury": "Jury Roles"
    }
  },
  "awards": {
    "honors": {
      "raptors_fellow": {
        "title": "Fellow",
        "description": "Selectively granted Fellow status within the global developer ecosystem, based on demonstrated technical expertise and contribution."
      },
      "ieee_member": {
        "title": "Professional Member",
        "description": "Professional membership in IEEE, the world's largest technical professional organization."
      },
      "sudo_make_world": {
        "title": "sudo make world Hackathon",
        "description": "Official jury member at the 72-hour international online hackathon organized by Hackathon Raptors."
      },
      "garage_inference": {
        "title": "Garage Inference AI Hackathon",
        "description": "Jury member at an international AI-focused hackathon."
      },
      "cursor_alttab": {
        "title": "Cursor × ALT+TAB Hackathon",
        "description": "Invited jury member at an in-person hackathon developing public-interest AI solutions using municipal field data."
      }
    }
  },
```

- [ ] **Step 4: `app/[locale]/awards/page.tsx` oluştur**

```tsx
"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { formatMonthYear } from "@/lib/date";
import { type Honor, honors } from "@/lib/awards";

function HonorCard({
  honor,
  t,
}: {
  honor: Honor;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-sm text-primary font-medium mb-2">
        {formatMonthYear(honor.date, t)}
        {honor.current && ` – ${t("awardsPage.present")}`}
      </div>
      <h3 className="text-xl font-bold mb-1 text-foreground">
        {t(`awards.honors.${honor.key}.title`)}
      </h3>
      {honor.organizationUrl ? (
        <a
          href={honor.organizationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary font-medium mb-3"
        >
          {honor.organization}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      ) : (
        <div className="text-muted-foreground font-medium mb-3">
          {honor.organization}
        </div>
      )}
      <p className="text-muted-foreground text-sm mt-2">
        {t(`awards.honors.${honor.key}.description`)}
      </p>
    </div>
  );
}

export default function AwardsPage() {
  const t = useTranslations();
  const fellowships = honors.filter((h) => h.section === "fellowship");
  const juries = honors.filter((h) => h.section === "jury");

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {t("awardsPage.title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t("awardsPage.description")}
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {t("awardsPage.sections.fellowship")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fellowships.map((honor) => (
            <HonorCard key={honor.key} honor={honor} t={t} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          {t("awardsPage.sections.jury")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {juries.map((honor) => (
            <HonorCard key={honor.key} honor={honor} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 5: Build + lint**

Run: `npm run build && npm run lint`
Expected: Hatasız. `out/tr/awards/index.html` ve `out/en/awards/index.html` üretilir.

- [ ] **Step 6: Görsel doğrulama**

Run: `npm run dev`, `http://localhost:3000/tr/awards` ve `/en/awards` aç.
Expected: İki bölüm — "Fellowship & Üyelikler" (2 kart: Fellow "2026 – Devam Ediyor", Profesyonel Üye) ve "Jüri Üyelikleri" (3 kart). Kurum linkleri yeni sekmede açılır; `cursor_alttab` kartında link yok (düz metin). Eksik-çeviri uyarısı yok.

- [ ] **Step 7: Commit**

```bash
git add lib/awards.ts "app/[locale]/awards/page.tsx" messages/tr.json messages/en.json
git commit -m "feat: add awards (fellowships & jury roles) page"
```

---

### Task 4: Navigasyon — masaüstü linkleri + mobil alt satır menüsü

**Files:**
- Modify: `components/Header.tsx` (tam dosya aşağıda)
- Modify: `messages/tr.json` + `messages/en.json` (kullanılmayan `header.menu` key'ini kaldır)

**Interfaces:**
- Consumes: `header.{home,experience,projects,media,awards}` çeviri key'leri (media/awards Task 2'de eklendi).

**Tasarım:** Mobilde hamburger / açılır menü YOK. Bunun yerine nav linkleri, header'ın altında kalıcı bir **ikinci satır** (alt satır) olarak yatay gösterilir. Masaüstünde bu alt satır gizli (`md:hidden`); linkler üst bardaki mevcut yatay listede kalır (`hidden md:flex`). Aktif-link className'i iki satırda da kullanıldığı için `linkClass` yardımcısına çıkarılır (DRY).

- [ ] **Step 1: `components/Header.tsx`'i aşağıdaki tam içerikle değiştir**

```tsx
"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("header");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", labelKey: "home" },
    { href: "/experience", labelKey: "experience" },
    { href: "/projects", labelKey: "projects" },
    { href: "/media", labelKey: "media" },
    { href: "/awards", labelKey: "awards" },
  ] as const;

  const linkClass = (href: string) =>
    `transition-colors hover:text-primary ${
      pathname === href
        ? "text-primary font-semibold"
        : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <Link href="/" className="font-bold text-xl text-foreground">
          Harun Sokullu
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label={t("toggleTheme")}
              >
                {mounted &&
                  (theme === "system" ? (
                    <Monitor className="w-5 h-5" />
                  ) : theme === "light" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  ))}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Monitor className="w-4 h-4 mr-2" />
                {t("theme.system")}
                {theme === "system" && <Check className="w-4 h-4 ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="w-4 h-4 mr-2" />
                {t("theme.light")}
                {theme === "light" && <Check className="w-4 h-4 ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="w-4 h-4 mr-2" />
                {t("theme.dark")}
                {theme === "dark" && <Check className="w-4 h-4 ml-auto" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobil: kalıcı alt satır (ikinci nav satırı) */}
      <ul className="md:hidden flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-border px-4 py-2 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass(item.href)}>
              {t(item.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
```

- [ ] **Step 2: Kullanılmayan `header.menu` key'ini kaldır**

Hamburger kaldırıldığı için `header.menu` artık kullanılmıyor. Hem `messages/tr.json` hem `messages/en.json` içindeki `header` nesnesinden `"menu": ...` satırını sil. İki dosya senkron kalsın; JSON geçerli kalsın (virgül/parantez dengesi).

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: Hatasız tamamlanır (statik export). (`npm run lint` repo genelinde önceden bozuk — kapsam dışı, çalıştırma.)

- [ ] **Step 4: Görsel doğrulama (masaüstü)**

Run: `npm run dev`, geniş pencerede aç.
Expected: Üst bardaki menüde 5 link: Ana Sayfa · Deneyim · Projeler · Medya · Ödüller. Medya ve Ödüller doğru sayfalara gider; aktif sayfa vurgulanır. Alt satır (ikinci nav satırı) masaüstünde GÖRÜNMEZ.

- [ ] **Step 5: Görsel doğrulama (mobil)**

Tarayıcıyı dar/mobil görünüme al (veya DevTools cihaz modu).
Expected: Üst bardaki yatay link listesi gizli; header'ın altında kalıcı bir **ikinci satır** olarak 5 link yatay görünür (hamburger/açılır menü YOK). Linkler doğru sayfalara gider; aktif sayfa vurgulanır. Dar ekranda linkler gerekirse alta sarar (wrap). TR ve EN'de label'lar doğru.

- [ ] **Step 6: Commit**

```bash
git add components/Header.tsx messages/tr.json messages/en.json
git commit -m "feat: add media/awards nav links and mobile bottom-row menu"
```

---

## Self-Review Notları

- **Spec coverage:** `/media` sayfası (Task 2), `/awards` sayfası (Task 3), veri modelleri `lib/media.ts`+`lib/awards.ts` (Task 2-3), ortak `lib/date.ts` + deneyim refaktörü (Task 1), navigasyon + mobil menü (Task 4), her iki dilde i18n (Task 2-3), IET/DxRay dışlandı — hepsi karşılanıyor.
- **Type consistency:** `MediaStory`/`MediaOutlet`/`Honor` alanları sayfalarda birebir aynı kullanılıyor; `formatMonthYear(date, t)` imzası üç sayfada tutarlı.
- **Placeholder yok:** Tüm kod ve JSON içeriği tam.
- **Açık nokta (spec'ten):** Ödüller nav etiketi TR "Ödüller" / EN "Awards" seçildi; incelemede "Başarılar / Honors" tercih edilirse yalnızca `header.awards` + `awardsPage.title` değişir.
```
