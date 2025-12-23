import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

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
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
