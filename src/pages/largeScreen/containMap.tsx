import EchartsComponent from "@/common/componnets/echarts/index.tsx"
import { useEffect, useState } from "react"
import * as echarts from "echarts"
import data from '../../assets/map/四川省.json'


const MapEcharts = () => {
    const [mapOptions, setMapOptions] = useState<echarts.EChartOption>({})
    const [mapKey, setMapKey] = useState<string>('SC')
    useEffect(() => {
        setMapOptions({
            geo: {
                type: "map",
                aspectScale: 1, // 横向拉伸
                roam: true, // 地图操作 开启缩放或者平移，可以设置成 'scale' 或者 'move'。
                map: "SC",
                label: {
                    show: true,
                    normal: {
                        show: true, // 默认地图文字字号和字体颜色
                        fontSize: 10,
                        color: "#ffffff",
                    },
                    emphasis: {
                        show: true,
                        fontSize: 10, // 选中地图文字字号和字体颜色
                        color: "#CFCFCF",
                    },
                },
                itemStyle: {
                    normal: {
                        areaColor: "#040c3c", //地图本身的颜色
                        borderColor: "#00feda", //省份边框颜色
                        borderWidth: 1, // 省份边框宽度
                        opacity: 1, //图形透明度
                    },
                    emphasis: {
                        areaColor: "#040c3c", // 高亮时候地图显示的颜色
                        borderWidth: 0, // 高亮时的边框宽度
                    },
                },
                textFixed: {
                    Alaska: [20, -20],
                }
            },
            series: [
                {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    symbolSize: 12,
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            color: "#00ECC8",
                        },
                        emphasis: {
                            borderColor: "#fff",
                            borderWidth: 1,
                        },
                    },
                },
            ],
        })
    }, [])
    return (
        <div className="h-full w-full">
            <div className="h-[60px] w-full border-b-[1px]">

            </div>
            <div className="w-full h-full">
                <EchartsComponent options={mapOptions} geo={data} mapKey={mapKey} />
            </div>
        </div>
    )
}

export default MapEcharts