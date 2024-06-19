import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { add, sub, setCount } from '@/store/modules/app'
import { fetchName } from "@/store/modules/user"


function StudyRedux() {
    const { count } = useSelector((state) => state.appStore)
    const {name} = useSelector(state => state.userStore)
    const dispatch = useDispatch()
    const getInput = useRef(null)
    const ctrlCount = (type: string) => {
        switch (type) {
            case 'add':
                dispatch(add())
                break;
            case 'sub':
                dispatch(sub())
                break;
            default:
                break;
        }
    }
    const setNumToCount = () => {
        const value:number = getInput.current.value
        dispatch(setCount(value))
    }
    useEffect(() => {
        dispatch(fetchName())
    }, [dispatch])
    console.log(name);
    return (
        <>
            <p>-------------study redux-------------</p>
            <div className='a v x'>
                <button onClick={() => ctrlCount('sub')}>-</button>
                <span>{count}</span>
                <button onClick={() => ctrlCount('add')}>+</button>
                <input type="number" ref={getInput} onChange={() => {setNumToCount()}} />
                {/* <button onClick={setNumToCount}>submit</button> */}
                <p>{name}</p>
            </div>
        </>
    )
}
export default StudyRedux