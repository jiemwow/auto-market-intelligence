'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';

interface BubbleData {
  name: string;
  brand: string;
  x: number;      // 轴距
  y: number;      // 平均售价
  size: number;   // 销量
  color: string;  // 动力类型
}

interface BubbleChartProps {
  data: BubbleData[];
  title?: string;
  xAxisName?: string;
  yAxisName?: string;
}

const powerTypeColors: Record<string, string> = {
  '燃油': '#5470c6',
  '插混': '#91cc75',
  '纯电': '#fac858',
  '增程': '#ee6666',
};

export function BubbleChart({ 
  data, 
  title = '车型市场分布图',
  xAxisName = '轴距 (mm)',
  yAxisName = '平均售价 (万元)'
}: BubbleChartProps) {
  const option = {
    title: {
      text: title,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: { data: { name: string; brand: string; color: string; x: number; y: number; size: number } }) => {
        const d = params.data;
        return `
          <div style="padding: 8px;">
            <b style="font-size: 14px;">${d.name}</b><br/>
            <span style="color: #666;">品牌: ${d.brand}</span><br/>
            <span style="color: #666;">动力: ${d.color}</span><br/>
            <hr style="margin: 8px 0; border: none; border-top: 1px solid #eee;"/>
            轴距: ${d.x}mm<br/>
            均价: ¥${d.y}万<br/>
            销量: ${d.size.toLocaleString()}辆
          </div>
        `;
      },
    },
    legend: {
      data: Object.keys(powerTypeColors),
      bottom: 10,
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: '15%',
    },
    xAxis: {
      name: xAxisName,
      nameLocation: 'middle',
      nameGap: 30,
      type: 'value',
      scale: true,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      name: yAxisName,
      nameLocation: 'middle',
      nameGap: 40,
      type: 'value',
      scale: true,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: Object.keys(powerTypeColors).map(powerType => ({
      name: powerType,
      type: 'scatter',
      symbolSize: (data: number[]) => Math.sqrt(data[2]) / 3,
      data: data
        .filter(d => d.color === powerType)
        .map(d => ({
          value: [d.x, d.y, d.size],
          name: d.name,
          brand: d.brand,
          color: d.color,
        })),
      itemStyle: {
        color: powerTypeColors[powerType],
        opacity: 0.7,
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          opacity: 1,
          borderColor: '#333',
          borderWidth: 2,
        },
      },
    })),
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 600, width: '100%' }}
      opts={{ renderer: 'canvas' }}
    />
  );
}
