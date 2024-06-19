import { useToggle } from "@/common/customHooks/toggle"

function CustomHook() {
    const { value, toggle } = useToggle()
    return (
        <>
            {value && <div>CustomHook</div>}
            <button onClick={toggle}>toggle</button>
        </>
    )
}

export default CustomHook