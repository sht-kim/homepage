import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "신호테크놀로지 — WDAQ-X | 공장 엣지 AX 통합 솔루션",
  description:
    "WDAQ-X는 센서부터 대시보드까지 함께 제공하는, 공장 엣지 AX 도입을 위한 최고의 가성비 솔루션입니다. 삼성디스플레이 양산 라인 검증 기술.",
  keywords: [
    "신호테크놀로지",
    "WDAQ-X",
    "엣지 AI",
    "엣지 AX",
    "산업용 IoT",
    "스마트팩토리",
    "EG-Icon",
    "공장 모니터링",
  ],
  openGraph: {
    title: "WDAQ-X — 공장 엣지 AX 통합 솔루션",
    description:
      "센서부터 대시보드까지 함께 제공하는 산업용 엣지 AX 솔루션.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
