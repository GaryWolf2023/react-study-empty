import { get } from "http"
import { useRef, useState } from "react"



function ClassNameC() {
    const [count, setCount] = useState(0)
  const [list, setList] = useState([
    { name: '01' },
    { name: '02' },
    { name: '03' },
    { name: '04' }
  ])
  const [isLoading, setIsLoadign] = useState(false) 
  const checkLoading = (e: any) => {
    setIsLoadign(!isLoading)
    console.log(e);
    }
    const getRef = useRef(null)
    const getInputDom = () => {
        console.dir(getRef.current)
    }
    return (
        <>
            <ul>
        {
          list.map(it => {
            return (<li key={it.name}>{it.name}</li>)
          })
        }
      </ul>
      <div>{'123123'}</div>
      <div>
        {isLoading ? <span>loading</span> : <span>notLoading</span>}
        <button onClick={checkLoading}>点击切换状态</button>
            </div>
            <p>获取dom</p>
            <input type="text" ref={getRef} />
            <button onClick={getInputDom}>获取刚刚的dom</button>
    </>
    )
}

export default ClassNameC