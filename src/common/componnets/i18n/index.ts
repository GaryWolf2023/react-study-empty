import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next'
import zh_CN from "@/assets/local/zh-CN.json"
import zh_HK from "@/assets/local/zh-HK.json"
import en_US from "@/assets/local/en-US.json"


// 获取浏览器语言，并检查系统多语言是否包含此语言，若不包含自动切换为中文
const nowLanguage = navigator.language
localStorage.setItem('language', nowLanguage)
// 初始化语言
i18n.use(initReactI18next).init({
    lng: "zh-CN",
    resources: {
        'zh-CN': {
            translation: zh_CN
        },
        'zh-HK': {
            translation: zh_HK
        },
        'en-US': {
            translation: en_US
        }
    },
    fallbackLng: localStorage.getItem('language') || 'zh-CN',
    interpolation: {
        escapeValue: false, // 不要对文本进行转义
    }
})

export default i18n