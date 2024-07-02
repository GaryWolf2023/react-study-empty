import {FC} from "react";
import {Outlet} from 'react-router-dom'
import Header from './header/index.tsx'
// import Footer from './footer/index.tsx'
import classNames from "classnames";

const BlogLayout: FC = () => {
    return (
        <>
            <header className={classNames('','min-w-[1200px]')}>
                <Header></Header>
            </header>
            <main className={classNames('', 'min-w-[1200px]')}>
                <Outlet></Outlet>
            </main>
            {/*<footer className={classNames('','min-w-[1200px]')}>*/}
            {/*    <Footer></Footer>*/}
            {/*</footer>*/}
        </>
    )
}
export default BlogLayout
