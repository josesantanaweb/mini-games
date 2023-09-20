import './globals.css'
import type { Metadata } from 'next'
import { nunito } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Mini Games",
  description: "Mini Games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
