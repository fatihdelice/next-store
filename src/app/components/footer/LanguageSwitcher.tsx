"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useProperties } from '@/hooks/useProperties';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const { t } = useProperties();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value as "en-US" | "tr-TR";
        setLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    };

    return (
        <div className="mb-4 text-neutral-500">
            <label>
                <span className="text-sm">{t('global.footer.changeLanguage')}</span>
                <select
                    className="ml-2 text-sm border-none outline-none px-1 py-1 rounded-md"
                    value={language}
                    onChange={handleLanguageChange}
                >
                    <option value="en-US">{t('global.language.en')}</option>
                    <option value="tr-TR">{t('global.language.tr')}</option>
                </select>
            </label>
        </div>
    );
}
