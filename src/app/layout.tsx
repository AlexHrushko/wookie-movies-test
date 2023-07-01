import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wookie Movies",
  description: "Wookie Movies test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
