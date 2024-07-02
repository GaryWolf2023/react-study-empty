import {FC, useEffect, useState} from "react";
import classNames from "classnames";
import './postList.scss';

type Props = {
    type: string, // 列表的主要类型
    sortType: string // 排序方式： 综合（all），热度(hot)，最新
}
const PostList:FC<Props> = ({type, sortType}) => {
    const [list, setList] = useState([
        {
            id: 12312313,
            title: "年号手段斯普的爱喝水哦啊是不多哈岁的ui啊手段是病毒和八素的好吧u恨不得哈巴杜哈辨识度好吧爋啊u还不是都哈巴速度还不得不",
            description: "ajsidpaisdiupasdaisudasdiabspydbayuhsdbuohasdyuigasyudgvauoshdbpahsbndhuabuohdbasyhudbuyahsbduoyasbduyabduybasyudbausyduoaysdgb",
            time: '2023-02-14',
            authorName: '前端君',
            lookNum: '8.9k',
            like: 1233123,
            tag: ["前端","后端","java"]
        },
        {
            id: 1223123,
            title: "年号手段斯普的爱喝水哦啊是不多哈岁的ui啊手段是病毒和八素的好吧u恨不得哈巴杜哈辨识度好吧爋啊u还不是都哈巴速度还不得不",
            description: "ajsidpaisdiupasdaisudasdiabspydbayuhsdbuohasdyuigasyudgvauoshdbpahsbndhuabuohdbasyhudbuyahsbduoyasbduyabduybasyudbausyduoaysdgb",
            time: '2023-02-14',
            authorName: '前端君',
            lookNum: '8.9k',
            like: 1233123,
            tag: ["前端","后端","java"]
        },
        {
            id: 1223,
            title: "年号手段斯普的爱喝水哦啊是不多哈岁的ui啊手段是病毒和八素的好吧u恨不得哈巴杜哈辨识度好吧爋啊u还不是都哈巴速度还不得不",
            description: "ajsidpaisdiupasdaisudasdiabspydbayuhsdbuohasdyuigasyudgvauoshdbpahsbndhuabuohdbasyhudbuyahsbduoyasbduyabduybasyudbausyduoaysdgb",
            time: '2023-02-14',
            authorName: '前端君',
            lookNum: '8.9k',
            like: 123123123,
            tag: ["前端","后端","java"]
        }
    ])
    useEffect(() => {
        // 这里去请求list
    }, [type, sortType])
    return (
        <section className={classNames('list-box')}>
                {list.map(item => {
                    return (
                        <section className={classNames('list-item-box')} key={item.id}>
                            <section className={classNames('title-box')}>{item.title}</section>
                            <section className={classNames(`title-description`)}>{item.description}</section>
                            <section className={classNames(`bottom-box relative`)}>
                                <span className={classNames(`text-[14px]`)}>
                                    <span className={classNames()}>{item.authorName}</span>|<span>{item.lookNum}</span>|<span>{item.time}</span>
                                </span>
                                <span className={classNames()}>{item.like}</span>
                                <span className={classNames('absolute right-8 tag-box')}>{
                                    item.tag.map(item2 => {
                                        return(
                                            <span className={`tag-item`} key={item2}>{item2}</span>
                                        )
                                    })
                                }</span>
                            </section>
                        </section>
                    )
                })}
        </section>
    )
}
export default PostList