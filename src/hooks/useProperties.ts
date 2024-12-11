"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const useProperties = () => {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      const langFile = language === "tr-TR" ? await import("../messages/tr.json") : await import("../messages/en.json");
      setTranslations(langFile);
      setLoading(false);
    };
    fetchTranslations();
  }, [language]);

  const t = (key: string) => {
    if (loading) return ''; 
    if (!translations) return key;
    return translations[key] || key;
  };

  return { t, loading };
};
