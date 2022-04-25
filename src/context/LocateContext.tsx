import React, { createContext, useEffect, useState } from 'react';
import esLang from 'src/i18n/es';
import { locate } from 'src/i18n/locate';
interface ContextProps {
  children?: JSX.Element | JSX.Element[];
  language: 'es' | 'en';
}

export const Context = createContext<locate>(esLang);

const LocateContext = ({ children, language = 'es' }: ContextProps) => {
  const [locateLang, setLocateLang] = useState<locate>(esLang);

  useEffect(() => {
    const lang: locate = language === 'es' ? esLang : esLang;
    setLocateLang(lang);
  }, [language]);
  return <Context.Provider value={locateLang}>{children}</Context.Provider>;
};

export default LocateContext;
