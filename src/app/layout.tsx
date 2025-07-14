"use client";
import "./globals.css";
import ChatBot2 from "@/components/chat/chatBot";
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <AuthProvider>
            <main >
              {children}
            </main>
            <ChatBot2 />
          </AuthProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}