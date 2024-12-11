"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "en-US" | "tr-TR";

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Locale>("en-US");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Locale;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
