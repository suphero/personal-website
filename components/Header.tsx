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
