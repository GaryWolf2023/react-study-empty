import { ConfigProvider, theme } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const SetTheme = ({ children }: { children: React.ReactNode }) => {
    const { settingOptions } = useSelector((state: any) => state.appStore)
    const [color, setColor] = useState<string>('')
    useEffect(() => {
        setColor(settingOptions.themePrimary)
    }, [settingOptions.themePrimary])
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#00b96b',
                        algorithm: true, // 启用算法
                    },
                    Input: {
                        colorPrimary: '#eb2f96',
                        algorithm: true, // 启用算法
                    }
                },
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: color,
                    borderRadius: 5,
                    // 派生变量，影响范围小
                    colorBgContainer: settingOptions.colorBgContainer,
                    // 动画开关
                    motion: true
                },
                // 1. 单独使用暗色算法
                algorithm: theme.defaultAlgorithm,

                // 2. 组合使用暗色算法与紧凑算法
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default SetTheme