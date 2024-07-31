import { Inter } from "next/font/google";
import "./globals.css";

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/ui/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "NextJs starter by Sagar Sangwan",
  description: "NextJs starter by Sagar Sangwan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >
        <Navbar />
        <div className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>

          {children}
        </div>
      </body>
    </html>
  );
}
