import {useEffect, useState} from "react";

/**
 * @description 查看网络参数，查看是否需要切换到离线模式并且弹出提醒，
 * @description 深入思考自定义hook的使用（复用性，简洁性）
 * 自定义hook概念，我们创建一个use开头的函数，函数中要使用其他hook是，这个函数来实现一些功能并且返回相应的结果或者操作方法
 */
const useOnline = () => {
    const [online, setOnline] = useState(navigator.onLine)

    useEffect(() => {
        const onlineFunc = () => setOnline(true)
        const offlineFunc = () => setOnline(false)
        // js提供的监听事件
        window.addEventListener('online', onlineFunc, false)
        window.addEventListener('offline', offlineFunc, false)

        return () => {
            window.removeEventListener('online', onlineFunc, false)
            window.removeEventListener('offline', offlineFunc, false)
        }
    }, [])

    return online
}

export default useOnline