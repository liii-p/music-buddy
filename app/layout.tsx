import "./globals.css"
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: Add navbar to layout
  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}
