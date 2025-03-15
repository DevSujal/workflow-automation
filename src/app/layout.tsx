import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";


const dmSans = DM_Sans({
  variable: "--dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workflow",
  description: "automate workflows with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="hide-scrollbar" suppressHydrationWarning>
        <body
          className={`${dmSans.variable} ${dmSans.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
