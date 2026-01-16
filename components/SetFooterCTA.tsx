"use client";

import { useEffect } from "react";
import { useFooterCTA } from "@/contexts/FooterCTAContext";

interface SetFooterCTAProps {
  title: string;
  description: string;
  quoteLink?: string;
}

export function SetFooterCTA({ title, description, quoteLink }: SetFooterCTAProps) {
  const { setCtaData } = useFooterCTA();

  useEffect(() => {
    setCtaData({ title, description, quoteLink });
  }, [title, description, quoteLink, setCtaData]);

  return null;
}
