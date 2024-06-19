import Loading from '@/common/componnets/loading/index.tsx'
import { Suspense } from 'react'

const LazyRouter = ({children}:{children:JSX.Element}) => {
    return (
        <Suspense fallback={<Loading></Loading>}>
            { children }
        </Suspense>
    )
}

export default LazyRouter