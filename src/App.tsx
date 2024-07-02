import '@/style/App.css'
import SetTheme from '@/common/componnets/theme/index.tsx';
import ChangeLang from '@/common/componnets/i18n/changeLang.tsx';

import { memo } from 'react'
// import Loading from './common/componnets/loading';
// 国际化
import '@/common/componnets/i18n/index.ts'
import ManageRouter from './router/manageRouter';

const App = memo(() => {
    return (
        <div className="App">
            <SetTheme>
                {/* <RouterProvider router={router} /> */}
                <ChangeLang />
                <ManageRouter></ManageRouter>
            </SetTheme>
        </div>
    )
})

export default App