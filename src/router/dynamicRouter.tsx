import { useRoutes } from "react-router-dom"
import { routes, staticRoutes } from './index.tsx'

const DynamicRouter = () => {
    const element = useRoutes([...routes, ...staticRoutes])
    return element
}

export default DynamicRouter