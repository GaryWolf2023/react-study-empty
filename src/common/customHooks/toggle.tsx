import {useState} from 'react'

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

