"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Bons Fluídos",
//   description: "Acompanhe novidades e artigos!",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
