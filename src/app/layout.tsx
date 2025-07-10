"use client";
import "./globals.css";
import ChatBot2 from "@/components/chat/chatBot";
import { CustomThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <main >
            {children}
          </main>
          <ChatBot2 />
        </CustomThemeProvider>
      </body>
    </html>
  );
}
