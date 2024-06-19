import './index.scss'
import { Drawer } from "antd"
import { FC, ReactNode, memo } from "react";
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import { useSelector, useDispatch } from "react-redux"
import { openSetLocal, setLanguage } from "@/store/modules/app.ts"
import zh_CN from "@/assets/local/zh-CN.json"
import zh_HK from "@/assets/local/zh-HK.json"
import en_US from "@/assets/local/en-US.json"
import classNames from "classnames";


type Props = {
    children: ReactNode
}

const I18nComponent: FC<Props> = memo((props) => {
    const { language, localeList, setLocale } = useSelector((state: any) => state.appStore)
    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(openSetLocal(false))
    };
    // 获取浏览器语言，并检查系统多语言是否包含此语言，若不包含自动切换为中文
    const nowLanguage = navigator.language
    localStorage.setItem('language', Object.keys(localeList).includes(nowLanguage)?nowLanguage:'en-US')
    
    i18n.use(initReactI18next).init({
        lng: language,
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

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang)
        dispatch(setLanguage(lang))
        dispatch(openSetLocal(false))
    }


    return (
        <>
            {props.children}
            <Drawer title="Basic Drawer" onClose={onClose} open={setLocale}>
                {
                    Object.keys(localeList).map((item: string) => {
                        return (
                            <div
                                key={localeList[item].lang}
                                onClick={() => changeLang(localeList[item].lang)}
                                className={classNames("normal", localeList[item].lang===language?"is-check":'' )}>
                                {localeList[item].label}
                            </div>
                        )
                    })
                }
            </Drawer>
        </>
    )
})

export default I18nComponent