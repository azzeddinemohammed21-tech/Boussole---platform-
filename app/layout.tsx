import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const display = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "بوصلة+ | منصة اكتشاف وتطوير الكفاءات",
  description:
    "بوصلة+ منصة عربية لاكتشاف الكفاءات، بناء المسار المهني، والربط بين الأفراد والفرص عبر اختبارات علمية ومحرك مطابقة ذكي.",
  keywords: [
    "بوصلة+",
    "اكتشاف الكفاءات",
    "التطوير المهني",
    "منصة توظيف",
    "أكاديمية بوصلة",
  ],
  openGraph: {
    title: "بوصلة+ | منصة اكتشاف وتطوير الكفاءات",
    description:
      "اكتشف كفاءاتك، طوّر مسارك، وابنِ اتجاهك المهني مع بوصلة+.",
    locale: "ar_DZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const display = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "بوصلة+ | منصة اكتشاف وتطوير الكفاءات",
  description:
    "بوصلة+ منصة عربية لاكتشاف الكفاءات، بناء المسار المهني، والربط بين الأفراد والفرص عبر اختبارات علمية ومحرك مطابقة ذكي.",
  keywords: [
    "بوصلة+",
    "اكتشاف الكفاءات",
    "التطوير المهني",
    "منصة توظيف",
    "أكاديمية بوصلة",
  ],
  openGraph: {
    title: "بوصلة+ | منصة اكتشاف وتطوير الكفاءات",
    description:
      "اكتشف كفاءاتك، طوّر مسارك، وابنِ اتجاهك المهني مع بوصلة+.",
    locale: "ar_DZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
