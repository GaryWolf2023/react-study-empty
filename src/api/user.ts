import http from './request'

export const login = (data: any) => {
    return http({method:'post', url:'/login', data})
}

export const getCaptcha = () => {
    return http({method:'get', url:'/user/captcha'})
}