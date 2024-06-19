import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { setSettingDrawer } from '@/store/modules/app.ts'
import { useDispatch } from 'react-redux'
import './index.scss'
import { Button } from 'antd'

const User = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [actionName, setActionName] = useState('/user/detail')
    const navList = [
        {
            name: '用户详情',
            parama: true,
            path: '/user'
        },
        {
            name: '用户列表',
            parama: true,
            path: '/user/list'
        },
    ]
    type NavList = {
        name: string,
        parama: boolean,
        path: string
    }
    const navTo = (obj:NavList) => {
        setActionName(obj.path)
        navigate(obj.path)
    }
    return (
        <div className='user'>
            <div className={'user-title'}>
                <span>用户页</span>
                <Button type="primary" onClick={() => dispatch(setSettingDrawer(true))}>发送请求</Button>
            </div>  
            <div className={'user-content'}>
                <div className={'user-nav'}>
                    {/* 导航 */}
                    {navList.map(item => (
                        <div className={'user-nav-li'} key={item.path} onClick={() => navTo(item) }>{item.name}</div>
                    ))}
                </div>
                <div className={'user-main-outlet'}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default User