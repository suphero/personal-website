"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/suphero", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/suphero", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/suphero", icon: Twitter },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
