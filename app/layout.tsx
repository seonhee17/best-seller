import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New York Best Seller Store",
  description: "Welcome , Enjoy Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}