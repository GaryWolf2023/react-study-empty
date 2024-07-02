import { useState } from 'react'

// 封装了一个自定义hook，用于实现一个简单的切换功能。
// 该hook返回一个布尔值和一个切换函数。切换函数用于切换该布尔值的状态。 
// 你可以根据需要将其应用于任何组件中。
export function useToggle() {
    const [value, setValue] = useState(true)
    const toggle = () => {
        setValue(!value)
    }
    return {
        value,
        toggle
    }
}

