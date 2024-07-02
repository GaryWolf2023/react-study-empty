import { Button } from 'antd'
import './creatorCenter.scss'
import classNames from 'classnames'
import { useToggle } from '@/common/customHooks/toggle'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/common/componnets/icon/icon'

const CreatorCenter = () => {
    const { value, toggle } = useToggle(false)
    const [list, setList] = useState([
        {
            id: 1,
            name: '写文章',
            icon: 'icon-wenzhang',
            path: '/blog'
        },
        {
            id: 2,
            name: '写笔记',
            icon: 'icon-biji',
            path: '/blog'
        },
        {
            id: 3,
            name: '沸点',
            icon: 'icon-hunheyuanyoudeshifeidianzhengliuzhailiufenxingzhi',
            path: '/blog'
        },
        {
            id: 4,
            name: '写代码',
            icon: 'icon-daima',
            path: '/blog'
        },
        {
            id: 5,
            name: '草稿',
            icon: 'icon-a-appround41',
            path: '/blog'
        },
    ])
    const [actList, setActList] = useState([
        {
            id: 1,
            type: '活动',
            description: '节哀顺便大厦地图关于阿姨是固定v公鸭嗓阿斯关于的v爱应该是v大哥i呀v四月底奥斯本的缘故VS的一个v啊扫地阿姨是通过',
        },
        {
            id: 2,
            type: '活动',
            description: '节哀顺便大厦地图关于阿姨是固定v公鸭嗓阿斯关于的v啊扫地阿姨是通过',
        },
        {
            id: 3,
            type: '活动',
            description: '节哀顺便大厦地图关于阿姨是固定v公鸭嗓阿斯关于的v啊扫地阿姨是通过',
        },
        {
            id: 4,
            type: '活动',
            description: '节哀顺便大厦地图关于阿姨是固定v公鸭嗓阿斯关于的v啊扫地阿姨是通过',
        }  
    ])
    const navigate = useNavigate()
    return (
        <div className={classNames("creator-center")}>
            <Button type="primary" onClick={() => { toggle() }}>创作中心</Button>
            {
                value ?
                    <div className={classNames("creator-center-content")} onMouseLeave={() => { toggle() }}>
                        <div className={classNames('tag-box')}>
                            {list.map((item) => {
                                return (
                                    <span key={item.id} onClick={() => { navigate(item.path) }} className={classNames("tag-item")}>
                                        <span className={classNames("text-2xl")}>
                                            <Icon icon={item.icon} className={classNames("rounded")}></Icon>
                                        </span>
                                        <span>{item.name}</span>
                                    </span>
                                )
                            })}
                        </div>
                        <div className={classNames('hot-msg')}>
                            <p>
                                <span>创作灵感</span>
                                <span>更多{">"}</span>
                            </p>
                            {}
                        </div>
                    </div>
                    : ''
            }

        </div>
    )
}

export default CreatorCenter