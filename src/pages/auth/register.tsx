// import { useEffect } from "react";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";

const Register = (props: any) => {
    console.log(props)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    useParams()
    const name = searchParams.get('name');
    console.log('searchParams传参\n接收到参数:', name);
    return (
        <div>
            <h1>{ '注册页面' }</h1>
            <Link to={"/study"}>去学习页面</Link>
            <button onClick={() => {
                navigate('/login/123/李四')
            }}>{ '演示路由传参' }</button>
        </div>
    )
}

export default Register;