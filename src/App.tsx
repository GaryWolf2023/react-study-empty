import '@/style/App.css'
import { BrowserRouter } from 'react-router-dom'
import DynamicRouter from '@/router/dynamicRouter';
import SetTheme from '@/common/componnets/theme/index.tsx';
import ChangeLang from '@/common/componnets/i18n/changeLang.tsx';

import { Suspense, memo } from 'react'
import Loading from './common/componnets/loading';

import '@/common/componnets/i18n/index.ts'

const App = memo(() => {
    return (
        <div className="App">
            <SetTheme>
                {/* <RouterProvider router={router} /> */}
                <ChangeLang />
                    <Suspense fallback={<Loading />}>
                        <BrowserRouter>
                            <DynamicRouter></DynamicRouter>
                        </BrowserRouter>
                    </Suspense>
            </SetTheme>
        </div>
    )
})

export default App