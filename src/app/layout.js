import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Fadli — Frontend Developer",
  description:
    "Mahasiswa Rekayasa Perangkat Lunak yang berfokus pada pengembangan frontend web yang cepat, responsif, aksesibel, dan dirancang dengan presisi.",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0F1712" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className="antialiased min-h-screen bg-white relative"
        style={{ backgroundColor: "#fff", color: "#111" }}
      >
        {/* Dynamic Animated Background */}
        <BackgroundAnimation />
        {/* Top Option 2 Modular Navbar */}
        <Navbar />
        {/* Main 100% Full Width Content */}
        <main className="min-h-screen w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
