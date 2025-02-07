 
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
 
// 引入柱状图图表等，图表后缀都为 Chart
import { BarChart, LineChart, PieChart } from 'echarts/charts';
// 系列类型的定义后缀都为 SeriesOption
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts';
 
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  // AriaComponent,
 
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from 'echarts/components';
// 组件类型的定义后缀都为 ComponentOption
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
  DatasetComponentOption,
} from 'echarts/components';
 
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
 
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
 
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>;
 
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
 
  BarChart,
  LineChart,
  PieChart,
 
  LabelLayout,
  UniversalTransition,
 
  CanvasRenderer,
]);
 
export default echarts;