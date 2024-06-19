import { useEffect, useState } from "react"


function StudyEffect() {
    let [num, setNum] = useState(0)
    useEffect(
        () => {
            // 这是一个副作用方法，在这里执行由非渲染引起的操作
            console.log('执行了一次,num=', num);
        },
        // 为空数组的时候第一个参数只执行一次
        [num]
    )
    return (
        <div>
            <p>{num}</p>
            <button onClick={()=>{setNum(num+=1)}}>+</button>
        </div>
    )
}

export default StudyEffect