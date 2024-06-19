import { useSelector, useDispatch } from "react-redux"
import { openSetLocal } from "@/store/modules/app.ts"
import './changeLocal.scss'
import { memo, useEffect, useState } from "react";
interface Props {
    size?: string; // 字体大小
    color?: string;
    bgColor?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}
const Locale: React.FC<Props> = memo(({ size, color, bgColor, top, left, right, bottom }) => {
    console.log(size, color, bgColor, top, left, right, bottom)
    const style: React.CSSProperties = {
        fontSize: size || '12px',
        color: color || '#000',
        backgroundColor: bgColor || "#fff",
        top: top !== undefined ? `${top}` : undefined,
        left: left !== undefined ? `${left}` : undefined,
        right: right !== undefined ? `${right}` : undefined,
        bottom: bottom !== undefined ? `${bottom}` : undefined,
    }
    const { language, setLocale, localeList } = useSelector((state: any) => state.appStore)
    const dispatch = useDispatch()
    const openLocalDrawer = () => {
        dispatch(openSetLocal(!setLocale))
    }
    return (<>
        <div
            className="px-[10px] absolute locale-box"
            style={style}
            onClick={() => openLocalDrawer()}>
            {localeList[language].label}
        </div>
    </>)
})

export default Locale