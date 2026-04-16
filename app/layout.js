import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// إعدادات الـ SEO المحترفة
export const metadata = {
  title: "Mahmod Alayoubi | Fullstack utvecklare",
  description:
    "Erfaren Fullstack/Frontend utvecklare baserad i jönköping. Specialist på JavaScript, React, Next.js och moderna webblösningar.",
  keywords: [
    "Fullstack utvecklare",
    "Frontend utvecklare",
    "Next.js",
    "React",
    "JavaScript",
    "Jönköping",
    "Webbutvecklare",
    "Sverige",
  ],
  authors: [{ name: "Mahmod Alayoubi" }],
  openGraph: {
    title: "Mahmod Alayoubi | Portfolio",
    description: "Bygger framtidens webb med Next.js & Supabase",
    url: "https://your-portfolio-domain.vercel.app", // ستغيره بعد الرفع
    siteName: "Mahmod Portfolio",
    locale: "sv_SE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // تأكد من وجود أيقونة صغيرة في مجلد public
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sv" // تغيير اللغة للسويدية بما أنك تستهدف السوق السويدي
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-[#2ecc91]/30 selection:text-[#2ecc91]">
        {/* يمكنك لاحقاً إضافة <Navbar /> هنا */}
        <Navbar />
        <main className="grow">{children}</main>

        {/* Footer بسيط واحترافي */}
        <footer className="py-10 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()}{" "}
              <span className="text-slate-900 font-bold">Mahmod Alayoubi</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400 font-bold uppercase tracking-widest">
              <span className="text-[#2ecc91]">Jönköping, Sverige</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
