import '@/style/App.css'
import { BrowserRouter } from 'react-router-dom'
import DynamicRouter from '@/router/dynamicRouter';
import SetTheme from '@/common/componnets/theme/index.tsx';
import I18nComponent from '@/common/componnets/i18n/index.tsx';

import { Suspense } from 'react'
import Loading from './common/componnets/loading';

const App = () => {
    return (
        <div className="App">
            <SetTheme>
                {/* <RouterProvider router={router} /> */}
                <I18nComponent>
                    <Suspense fallback={<Loading />}>
                        <BrowserRouter>
                            <DynamicRouter></DynamicRouter>
                        </BrowserRouter>
                    </Suspense>
                </I18nComponent>
            </SetTheme>
        </div>
    )
}

export default App