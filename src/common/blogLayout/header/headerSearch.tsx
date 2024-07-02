import { Input } from 'antd';
import { FC, memo, useEffect, useState } from 'react';
import './headerSearch.scss'

const { Search } = Input;
type Props = {
    searchValueFunc: (val:string) => void,
    isShow: boolean,
}

const HeaderSearch:FC<Props> = memo((props) => {
    const [value, setValue] = useState<string>('');
    const [Loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        props.searchValueFunc(value)
    }, [value])
    return (
        props.isShow?
        <div className="header-search">
            <Search value={value} onChange={(e:any) => {setValue(e.target.value)}} placeholder="搜索" enterButton loading={Loading} />
        </div>
        : <></>
    )
})

export default HeaderSearch