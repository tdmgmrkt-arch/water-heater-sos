"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FooterCTAData {
  title: string;
  description: string;
  quoteLink?: string;
}

interface FooterCTAContextType {
  ctaData: FooterCTAData;
  setCtaData: (data: FooterCTAData) => void;
}

const defaultCTA: FooterCTAData = {
  title: "Ready for 5-Star Service?",
  description: "Get same-day water heater installation or repair from licensed experts. Available 24/7 for emergencies.",
  quoteLink: "/quote",
};

const FooterCTAContext = createContext<FooterCTAContextType | undefined>(undefined);

export function FooterCTAProvider({ children }: { children: ReactNode }) {
  const [ctaData, setCtaData] = useState<FooterCTAData>(defaultCTA);

  return (
    <FooterCTAContext.Provider value={{ ctaData, setCtaData }}>
      {children}
    </FooterCTAContext.Provider>
  );
}

export function useFooterCTA() {
  const context = useContext(FooterCTAContext);
  if (context === undefined) {
    throw new Error("useFooterCTA must be used within a FooterCTAProvider");
  }
  return context;
}

export function useSetFooterCTA(data: FooterCTAData) {
  const { setCtaData } = useFooterCTA();

  useEffect(() => {
    setCtaData(data);
    return () => {
      setCtaData(defaultCTA);
    };
  }, [data.title, data.description, data.quoteLink, setCtaData]);
}

export { defaultCTA };
