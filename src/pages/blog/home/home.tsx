import {FC} from "react";
import classNames from "classnames";
import './home.scss'
import PostList from "@/pages/blog/home/postList.tsx";


const BlogHome: FC = () => {
    return (
        <section className={classNames('home-box')}>
            <aside className={classNames(`home-left`)}>小分类menu</aside>
            <main className={classNames(`home-main`)}>
                <PostList sortType={''} type={''}></PostList>
            </main>
            <aside className={classNames(`home-right`)}>推荐</aside>
        </section>
    )
}
export default BlogHome