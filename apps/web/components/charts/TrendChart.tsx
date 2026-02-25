'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';

interface TrendData {
  date: string;
  value: number;
  category?: string;
}

interface TrendChartProps {
  data: TrendData[];
  title?: string;
  yAxisName?: string;
  seriesName?: string;
}

export function TrendChart({
  data,
  title = '销量趋势',
  yAxisName = '销量 (辆)',
  seriesName = '销量',
}: TrendChartProps) {
  const dates = Array.from(new Set(data.map(d => d.date))).sort();
  const categories = Array.from(new Set(data.map(d => d.category || 'default')));

  const series = categories.map(cat => ({
    name: cat === 'default' ? seriesName : cat,
    type: 'line',
    smooth: true,
    data: dates.map(date => {
      const item = data.find(d => d.date === date && (d.category || 'default') === cat);
      return item?.value || 0;
    }),
    symbol: 'circle',
    symbolSize: 6,
    lineStyle: {
      width: 3,
    },
  }));

  const option = {
    title: {
      text: title,
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: series.map(s => s.name),
      bottom: 10,
    },
    grid: {
      left: '10%',
      right: '5%',
      top: '15%',
      bottom: '15%',
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLabel: {
        rotate: 45,
      },
    },
    yAxis: {
      name: yAxisName,
      type: 'value',
      axisLabel: {
        formatter: (value: number) => value >= 10000 ? `${(value / 10000).toFixed(0)}万` : value,
      },
    },
    series,
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 100,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 400, width: '100%' }}
      opts={{ renderer: 'canvas' }}
    />
  );
}
