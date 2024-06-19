import { useContext } from "react"
import  {MessageCtx} from '@/study/study'
function A() {
    return (
        <div style={{border:"1px solid #000", height:'160px'}}>
            <span>这是A组件</span>
            <B></B>
        </div>
    )
}

function B() {
    return (
        <div style={{ border: "1px solid #09fa15", height:'100px'}}>
            <span>这是B组件</span>
            <C></C>
        </div>
    )
}

function C() {
    const msg = useContext(MessageCtx)
    return (
        <div style={{ border: "1px solid #ff0000", height:'50px'}}>
            <span>这是C组件</span>
            <p>接收到消息</p>
            <span>{msg}</span>
        </div>
    )
}


export default A