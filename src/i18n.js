import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/en.json';
import plTranslation from './locales/pl/pl.json'; // Import the Polish translations

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            pl: {
                translation: plTranslation // Add the Polish translations
            }
        },
        fallbackLng: 'en', // Default language if translation not found
        debug: false, // Set to true for debugging
        interpolation: {
            escapeValue: false // React already escapes the values
        }
    });

export default i18n;