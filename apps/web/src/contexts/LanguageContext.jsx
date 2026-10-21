import React, { createContext, useContext, useMemo, useState } from 'react';
import translations from '@/i18n/translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('fr');

    const value = useMemo(
        () => ({
            lang,
            setLang,
            t: translations[lang],
        }),
        [lang],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
