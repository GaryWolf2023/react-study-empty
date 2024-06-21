import { memo, useEffect, useState } from 'react';
import { message } from 'antd';
import { getCaptcha } from '@/api/user';
import { useDispatch } from 'react-redux';
import { setLoginCaptcha } from '@/store/modules/user.ts';

const SvgCaptcha: React.FC = memo(() => {
    const [captchaUrl, setCaptchaUrl] = useState<string>('');
    const [num, setNum] = useState<number>(0)
    let [openC, setOpenC] = useState<boolean>(false)
    let [imgAlt, setImgAlt] = useState<string>('captcha')
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage();

    const captcha = () => {
        if (openC) {
            messageApi.open({
                type: 'warning',
                content: "请等待60秒后再次获取新验证码",
                duration: 2
            })
            return
        }
        const timer = setTimeout(() => {
            clearTimeout(timer)
            setOpenC(false)
        }, 6 * 1000)
        getCaptcha().then((res: res) => {
            setOpenC(true)
            if (res.code === 0) {
                setCaptchaUrl(res.data.base64)
                dispatch(setLoginCaptcha(res.data.answer))
            } else {
                messageApi.open({
                    type: 'warning',
                    content: res.data.msg,
                    duration: 2
                })
            }
            setImgAlt(res.data.msg)
        })
    }
    useEffect(() => {
        captcha()
    }, [num])
    return (
        <>
            {contextHolder}
            <img onClick={() => { setNum(Math.random()) }} className={"min-w-[100px] h-[32px]"} alt={imgAlt} src={captchaUrl} />
        </>
    )
})

export default SvgCaptcha;