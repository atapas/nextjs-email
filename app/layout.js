import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"

import { Toaster } from "@/components/ui/sonner"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "tapaScript - Email App",
  description: "Email App Using Next.js Server Action and Resend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <main>{children}</main>
          <Toaster richColors position="top-center"/>
      </body>
    </html>
  );
}
