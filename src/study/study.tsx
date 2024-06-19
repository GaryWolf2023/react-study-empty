import { useState, createContext } from 'react'
import './App.css'
import classnames from 'classnames'

import ClassNameC from './classname'
import TestProps from './testProps'
import A from './testContext'
import StudyEffect from './studyEffect'
import CustomHook from './customHooks'
import StudyRedux from './studyRedux'
import { Link } from 'react-router-dom'

// 在组件外创建一个上下文
const MessageCtx = createContext(NaN)

function Study() {
  const [name, setName] = useState('jone')
  const changeName = (name: string) => {
    setName(name)
  }
  let [msg, setMsg] = useState(0)
  return (
    <MessageCtx.Provider value={msg}>
      <div className={classnames('box-all')}>
        <div className={classnames('top-left', 'common-style')}>
          <ClassNameC></ClassNameC>
        </div>
        <div className={classnames('top-right', 'common-style')}>
          <TestProps name={name} changeName={changeName}></TestProps>
          <button onClick={() => { setName('tony') }}>更改名字</button>
          <A></A>
          <button onClick={() => {setMsg(msg+=1)}}>发消息</button>
        </div>
        <div className={classnames('bottom-left', 'common-style')}>
          <StudyEffect></StudyEffect>
          <CustomHook></CustomHook>
          <p>store</p>
          <StudyRedux></StudyRedux>
        </div>
        <div className={classnames('bottom-right', 'common-style')}>
          <Link to={'/login/123'}>登录</Link>
        </div>
      </div>
    </MessageCtx.Provider>
  )
}
export { MessageCtx }
export default Study
