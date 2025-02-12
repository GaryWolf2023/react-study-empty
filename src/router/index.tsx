import { createBrowserRouter, RouteObject , Navigate } from 'react-router-dom';
import { lazy } from 'react'
import RouterGruard from '@/router/routerGuard.tsx'

// import Study from '@/study/study.tsx';
// import Login from '@/pages/auth/login.tsx';
// import Register from '@/pages/auth/register.tsx';
import LayoutComponent from '@/common/layout/index.tsx'
import User from '@/pages/user';
import UserList from '@/pages/user/userList.tsx';
import UserDetail from '@/pages/user/userDetail.tsx';
import UserInfo from '@/pages/user/userInfo.tsx';
import NotFound from '@/common/componnets/statusPages/404.tsx';
import MonitoringSystem from '@/pages/largeScreen/index.tsx';


const Study = lazy(() => import('@/study/study.tsx'))
const Login = lazy(() => import('@/pages/auth/login.tsx'))
const Register = lazy(() => import('@/pages/auth/register.tsx'))
const staticRoutes:RouteObject[] = [{
    path: '/login',
    element: <Login />
},
{
    path: '/register',
    element: <Register />
},
{
    path: '/404',
    element: <NotFound />
},
{
    path: '/*',
    element: <Navigate to='/login' />
},
{
    path: '*',
    element: <Navigate to='/404' />
}
]
const routes:RouteObject[] = [
    {
        path: '/auth',
        element: <RouterGruard><LayoutComponent /></RouterGruard>,
        // element: <LayoutComponent />,
        children: [
            {
                index: true,
                element: <Study />
            },
            {
                path: 'home',
                element: <Register />
            },
            {
                path: 'user',
                element: <User />,
                children: [
                    {
                        index: true,
                        element: <UserDetail />
                    },
                    {
                        path: 'list',
                        element: <UserList />
                    },
                    {
                        path: 'info/:id',
                        element: <UserInfo />
                    }
                ]
            },
        ]
    },
    {
        path: '/largeScreen',
        element: <MonitoringSystem></MonitoringSystem>
    }
]

const router = createBrowserRouter(
    routes
)

// const RouterComp

export { router, staticRoutes, routes }