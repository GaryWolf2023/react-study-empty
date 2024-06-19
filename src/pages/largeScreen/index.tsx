// import { useRef, useState, useEffect } from "react";
import RightTopLine from './rightTop.tsx'
import MapEcharts from './containMap.tsx'

const MonitoringSystem = () => {
   
    return (
        <div className='h-full flex w-full'>
            {/* 这里放置大屏组件 */}
            <div className='h-full w-[25%] border-r-[1px]'>
                <RightTopLine></RightTopLine>
            </div>
            <div className='h-f w-[50%] overflow-hidden'>
                <MapEcharts></MapEcharts>
            </div>
            <div className='h-full w-[25%] border-l-[1px]'>
                <RightTopLine></RightTopLine>
            </div>
        </div>
    )
}

export default MonitoringSystem