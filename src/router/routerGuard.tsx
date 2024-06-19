import { Navigate, Link } from 'react-router-dom'

// 高阶组件

const RouterGruard = (props:any) => {
    // 路由守卫
    console.log(!!localStorage.getItem('token'));
    const token: String|null = localStorage.getItem('token')
    if (!token) {
        console.log('有权限--->直接跳转');
       return <>{ props.children }</>
    } else {
        console.log('无权限--->重定向');
        return <Navigate to='/login'></Navigate>
    }
}

export default RouterGruard