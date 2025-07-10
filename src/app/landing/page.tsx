
"use client";
import { useEffect, useState } from 'react';
import ModernLanding from './themes/modern/page';
import MinimalLanding from './themes/minimal/page';
import CorporateLanding from './themes/corporate/page';
import CreativeLanding from './themes/creative/page';

export default function LandingPage() {
  const [theme, setTheme] = useState<string>('modern');

  useEffect(() => {
    const landingTheme = process.env.NEXT_PUBLIC_LANDING_THEME || 'modern';
    setTheme(landingTheme);
  }, []);

  const renderLanding = () => {
    switch (theme) {
      case 'minimal':
        return <MinimalLanding />;
      case 'corporate':
        return <CorporateLanding />;
      case 'creative':
        return <CreativeLanding />;
      default:
        return <ModernLanding />;
    }
  };

  return renderLanding();
}
