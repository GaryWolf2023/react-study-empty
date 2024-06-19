
function TestProps(porps: any) {
    return (
        <div>
            <span>接收到父亲给儿子取得名字{porps.name}</span>
            <button onClick={() => porps.changeName('make')}>儿子自己改名</button>
        </div>
    )
}

export default TestProps