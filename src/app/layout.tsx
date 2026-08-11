import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Providers } from "@/components/providers";
import { profile } from "@/data/profile";
import { LocalTime } from "@/components/ui/local-time";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} - ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: "Portfolio of Nisrina Alya Nabilah - designing thoughtful digital experiences and building the technology behind them.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
    description: "Portfolio of Nisrina Alya Nabilah - designing thoughtful digital experiences and building the technology behind them.",
    url: profile.siteUrl,
    siteName: profile.name,
    images: [
      {
        url: profile.profileImage,
        width: 1200,
        height: 1200,
        alt: "Nisrina Alya Nabilah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: "Portfolio of Nisrina Alya Nabilah - designing thoughtful digital experiences and building the technology behind them.",
    images: [profile.profileImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Providers>
          <Navigation />
          <div className="fixed right-6 top-7 z-50 hidden lg:block">
            <LocalTime />
          </div>
          <main className="mx-auto min-h-screen max-w-[1400px] px-6 pb-24 pt-32 md:px-12">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
