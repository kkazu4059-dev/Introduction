import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ConfigureAmplify from "./components/ConfigureAmplify";
import "./globals.css";

export const metadata: Metadata = {
  title: "川畑和弘 | Service Hospitality Trainer",
  description: "接客コーチング、ホスピタリーマネジメント、レストラン・ホテル開業サポート、組織開発を提供するService Hospitality Trainerの川畑和弘のホームページです。お店の想いに寄り添い、心地よいサービス体験を丁寧に設計いたします。",
  keywords: ["接客コーチング", "ホスピタリティ", "レストラン", "ホテル", "開業サポート", "組織開発", "サービストレーナー"],
  authors: [{ name: "川畑和弘" }],
  openGraph: {
    title: "川畑和弘 | Service Hospitality Trainer",
    description: "お店の想いに寄り添い、心地よいサービス体験を丁寧に設計いたします。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigureAmplify />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
