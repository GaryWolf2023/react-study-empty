import { render } from 'nprogress';
import { memo, useEffect, useState } from 'react';
import { getCaptcha } from '@/api/user';

const SvgCaptcha: React.FC = memo(() => {
    const [captchaUrl, setCaptchaUrl] = useState<string>('/user/captcha');
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const reSetUrl = () => {
        setCaptchaUrl('/user/captcha?' + Math.random())
    }
    useEffect(() => {
        
    }, [])
    return (
        // 一个问题。为什么直接请求回来的不行，而直接放在img中的就可以
        <img onClick={() => {reSetUrl()}} className={"min-w-[100px] h-[32px]"} alt={'captcha'} src={baseUrl + captchaUrl} />
    )
})

export default SvgCaptcha;