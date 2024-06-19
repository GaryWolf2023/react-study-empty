import { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import {EChartOption} from "echarts";

type BaseChartProps ={
    options: EChartOption
    geo?: any
    mapKey: string
};

const EchartsComponent: React.FC<BaseChartProps> = ({ options, geo, mapKey }) => {
    const chartRef = useRef<HTMLInputElement>(null);
    const [chart, setChart] = useState<echarts.ECharts>();

    const handleResize = () => {
        chart?.resize();
    };

    const initChart = () => {
        if (chart) {
            window.removeEventListener("resize", handleResize);
            chart?.dispose();
        }
        
        const newChart = echarts?.init(chartRef?.current as HTMLElement);
        if (geo) {
            echarts.registerMap(mapKey, geo);
        }
        newChart.setOption(options, true);
        window.addEventListener("resize", handleResize);
        setChart(newChart);
    };
    useEffect(() => {
        initChart();
    }, [options])

    return <div ref={chartRef} className="w-full h-full" />
};

export default EchartsComponent;
