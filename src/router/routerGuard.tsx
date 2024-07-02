import { FC, ReactNode } from 'react';
import { Navigate, Link } from 'react-router-dom'
type Props = {
    children: ReactNode
}

/**
 * 开发中暂时关闭路由守卫,这个是全局路由首位
 * 思考一下如何才能实现组件路由首位
 * @param props 
 * @returns 
 */
const RouterGruard: FC<Props> = (props:any) => {
    // 路由守卫
    console.log(!!localStorage.getItem('token'));
    const token: String|null = localStorage.getItem('token')

    /**
     * @description 路由守卫
     */

    // if (!token) {
    //     console.log('有权限--->直接跳转');
    //    return <>{ props.children }</>
    // } else {
    //     console.log('无权限--->重定向');
    //     return <Navigate to='/login'></Navigate>
    // }
    return <>{ props.children }</>
}

export default RouterGruard