import type { Metadata } from "next";
import { Prompt, Geist_Mono } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-sans-th",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | วิศวกรรมซอฟต์แวร์",
  description:
    "เว็บพอร์ตโฟลิโอและเรซูเม่นักศึกษาวิศวกรรมซอฟต์แวร์ — โชว์ผลงาน ทักษะ และประสบการณ์",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${prompt.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f3faf4] text-emerald-950 antialiased">
        {children}
      </body>
    </html>
  );
}
