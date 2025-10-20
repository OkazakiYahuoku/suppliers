import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suppliers | B2B グロース加速プラットフォーム",
  description:
    "サプライヤーの価値を最大化し、買い手企業との信頼構築と商談創出を支援するB2Bマーケティング基盤。",
  openGraph: {
    title: "Suppliers",
    description:
      "サプライヤーの価値を最大化し、買い手企業との信頼構築と商談創出を支援するB2Bマーケティング基盤。",
    type: "website",
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: "Suppliers",
    description:
      "サプライヤーの価値を最大化し、買い手企業との信頼構築と商談創出を支援するB2Bマーケティング基盤。"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
