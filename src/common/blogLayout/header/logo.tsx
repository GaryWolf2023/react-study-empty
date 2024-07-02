import {FC, memo} from "react";
import logo from '@/assets/img/logo.png'
import classNames from "classnames";
import './logo.scss'
import {useNavigate} from "react-router-dom";


const LogoFC:FC = memo(() => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/blog')
    }
    return (
        <section className={classNames('logo-box')} onClick={goHome}>
            <img className={classNames(`img-box`)} src={logo} alt="logo"/>
            <span className={classNames(`title-box`)}>小林的博客</span>
        </section>
    )
})

export default LogoFC