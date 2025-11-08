import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionNav from "@/components/ui/SectionNav";
import BackToTop from "@/components/ui/BackToTop";
import CommandPalette from "@/components/ui/CommandPalette";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SpotlightEffect from "@/components/effects/SpotlightEffect";
import NoiseTexture from "@/components/effects/NoiseTexture";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import { Toaster } from "react-hot-toast";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basudev Ghosh - Software Developer | Full-Stack Engineer",
  description:
    "Software Developer specializing in FastAPI, Next.js, Python, and cloud infrastructure. Building scalable solutions for Amazon analytics, AI chatbots, and enterprise systems.",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "Azure",
    "Kubernetes",
    "Basudev Ghosh",
  ],
  authors: [{ name: "Basudev Ghosh" }],
  openGraph: {
    title: "Basudev Ghosh - Software Developer",
    description: "Full-Stack Software Developer building scalable solutions",
    url: "https://www.basudev.in",
    siteName: "Basudev Ghosh Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-inter">
        <ThemeProvider>
          <SmoothScrollProvider>
            {/* Loading Screen */}
            <LoadingScreen />

          {/* Custom Cursor (hidden on touch devices) */}
          <div className="hidden lg:block">
            <CustomCursor />
            <SpotlightEffect />
          </div>

          {/* Noise Texture Overlay */}
          <NoiseTexture />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navigation Components */}
          <Header />
          <SectionNav />
          <CommandPalette />

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />

          {/* Floating Action Buttons */}
          <BackToTop />

          {/* Chatbot Widget */}
          <ChatbotWidget />

          {/* Toast Notifications */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#1a1a1a",
                color: "#fff",
                border: "1px solid rgba(184, 214, 38, 0.3)",
                fontFamily: "var(--font-inter)",
              },
              success: {
                iconTheme: {
                  primary: "#b8d626",
                  secondary: "#1a1a1a",
                },
              },
            }}
          />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
