import EchartsComponent from "@/common/componnets/echarts/index.tsx";
import { useEffect, useState } from "react";


const RightTopLine: React.FC = () => {
    const [lineOptions, setLineOptions] = useState({});
    useEffect(() => {
        setLineOptions({
            legend: {},
            tooltip: {},
            dataset: {
                // 提供一份数据。
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
            xAxis: { type: 'category' },
            // 声明一个 Y 轴，数值轴。
            yAxis: {},
            // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        })
    }, [])
    return (
        <div className="h-[50%] w-full">
            <EchartsComponent options={lineOptions} mapKey={''} />
        </div>
    )
}

export default RightTopLine;