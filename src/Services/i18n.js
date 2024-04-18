import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '../Translation/ru.json';
import en from '../Translation/en.json';


i18n
.use(initReactI18next)
.init({
    fallbackLng : "ru",
    resources : {
        ru: ru,
        en: en
    }
})

export default i18n;