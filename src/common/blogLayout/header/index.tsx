import {FC, useState} from "react";
import classNames from "classnames";
import './index.scss'
import LogoFC from "@/common/blogLayout/header/logo.tsx";
import TopNav from "@/common/blogLayout/header/topNav.tsx";
import HeaderSearch from "@/common/blogLayout/header/headerSearch.tsx";
import CreatorCenter from "@/common/blogLayout/header/creatorCenter.tsx";


const Header:FC = () => {
    const [searchValue,setSearchValue] = useState<string>('')
    const searchValueFunc = (val:string) => {
        console.log(val)
        setSearchValue(val)
    }
    return (
        <section className={'h-[4rem] border-b-[1px]'}>
            <section className={classNames('h-full mx-auto header-group')}>
                <section className={classNames(`h-full`)}>
                    <LogoFC></LogoFC>
                </section>
                <section className={classNames(`h-full flex items-center`)}>
                    <TopNav></TopNav>
                </section>
                <section>
                    <HeaderSearch searchValueFunc={searchValueFunc} isShow={true}></HeaderSearch>
                </section>
                <section>
                    <CreatorCenter></CreatorCenter>
                </section>
                <section>
                    header login component
                </section>
            </section>
        </section>
    )
}
export default Header