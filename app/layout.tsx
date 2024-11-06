import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// import Navbar from "@/components/navbar";
// import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attent - Luxury Jewelry Store",
  description: "Discover our exquisite collection of fine jewelry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={playfair.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <main className="min-h-screen bg-background">{children}</main>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
