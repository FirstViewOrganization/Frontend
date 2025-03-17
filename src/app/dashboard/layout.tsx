"use client";
import Content from "@/components/Dashboard/content";
import Header from "@/components/Dashboard/header";
import Sidebar from "@/components/Dashboard/sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [open, setOpen] = useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <html lang="en">
       <body style={{ width: '100%', height: '100vh', margin: 0 }}>
       <div>
          <Header
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        </div>
        <div style={{ 
          marginTop: '64px', // Ajusta este valor según la altura de tu Header
          height: 'calc(100vh - 64px)', 
          overflow: 'auto' 
        }}>
          <Sidebar open={open}>
            <Content>
              {children}
            </Content>
          </Sidebar>
        </div>
      </body>
    </html>
  );
}
