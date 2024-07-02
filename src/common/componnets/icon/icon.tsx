import '@/assets/icon/iconfont.css'
import { FC } from 'react'
import './icon.scss'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4607260_40uy07pc6a1.js',
  });

// type Props = {
//     icon: string,
// }

/**
 * 传入iconfont的图标代码，生成图标 传入symbol类型的代码
 * @param icon 图标代码
 */
const Icon: FC<any> = ({ icon }) => {
    // 判断图标是否存在
    if (!icon) return null
    return (
        <IconFont className={icon} type={icon}></IconFont>
    )
}

export default Icon