import Loading from '@/common/componnets/loading/index.tsx'
import {FC, Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import DynamicRouter from './dynamicRouter.tsx'

// ts

/**
 *
 * @returns RouterElement
 * @description 管理路由-包含路由懒加载，路由动态管理，路由鉴权
 * @author lby
 * @date 2024-06-18 11:42
 */
const ManageRouter: FC = () => {
    return (
        <Suspense fallback={<Loading></Loading>}>
            <BrowserRouter>
                <DynamicRouter></DynamicRouter>
            </BrowserRouter>
        </Suspense>
    )
}

export default ManageRouter