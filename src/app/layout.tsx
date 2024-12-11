import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/app/components/footer/Footer";
import Header from "./components/header/Header";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Next Store",
  description: "Next Store App coding with delice.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
