"use client";
import "./globals.css";
import ChatBot2 from "@/components/chat/chatBot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <main >
          {children}
        </main>
        <ChatBot2 />
      </body>
    </html>
  );
}
