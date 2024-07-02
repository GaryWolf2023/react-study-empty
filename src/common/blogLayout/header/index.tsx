import {FC} from "react";
import classNames from "classnames";
import './index.scss'
import LogoFC from "@/common/blogLayout/header/logo.tsx";


const Header:FC = () => {
    return (
        <section className={'h-[4rem] border-b-[1px]'}>
            <section className={classNames('h-full mx-auto header-group')}>
                <section className={classNames(`h-full`)}>
                    <LogoFC></LogoFC>
                </section>
                <section>menuList</section>
                <section>search</section>
                <section>功能</section>
                <section>isLogin</section>
            </section>
        </section>
    )
}
export default Header