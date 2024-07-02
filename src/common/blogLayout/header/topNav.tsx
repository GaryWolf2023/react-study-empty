import classNames from "classnames";
import { FC, memo, useState } from "react";
import './topNav.scss'
import { useNavigate } from "react-router-dom";

type Menu = {
    id: number;
    name: string;
    path: string;
}

const TopNav:FC = memo(() => {
    const navigate = useNavigate()
    const [menuList, setMenuList] = useState<Menu[]>([
        {
            id: 1,
            name: "首页",
            path: "/blog"
        },
        {
            id: 2,
            name: "BOT",
            path: "/blog"
        },
        {
            id: 3,
            name: "课程",
            path: "/blog"
        },
        {
            id: 4,
            name: "AI",
            path: "/blog"
        },
        {
            id: 5,
            name: "活动",
            path: "/blog"
        },
        {
            id: 6,
            name: "直播",
            path: "/blog"
        }
    ]);
    const goPage = (path: string) => {
        // 跳转页面
        navigate(path)
    }
    return (
        <div className={classNames("top-nav")}>
            {
                menuList.map(item => {
                    return <span className={classNames('nav-item')} key={item.id} onClick={() => (goPage(item.path))}>{item.name}</span>
                })
            }
        </div>
    )
})

export default TopNav;