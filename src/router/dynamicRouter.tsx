import { useRoutes } from "react-router-dom"
import { routes, staticRoutes } from './index.tsx'


// DynamicRouter
// @discroption 动态路由, 在这里可以配置动态路由
// @author lby
const DynamicRouter = () => {
    const element = useRoutes([...routes, ...staticRoutes])
    return element
}

export default DynamicRouter