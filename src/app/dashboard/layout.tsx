"use client";
import Content from "@/components/Dashboard/content";
import Header from "@/components/Dashboard/header";
import Sidebar from "@/components/Dashboard/sidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
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
    <ProtectedRoute>
      <div>
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </div>
      <div style={{
        marginTop: '64px', // Ajusta este valor según la altura de tu Header
        overflow: 'auto'
      }}>
        <Sidebar open={open}>
          <Content>
            {children}
          </Content>
        </Sidebar>
      </div>
    </ProtectedRoute>
  );
}
