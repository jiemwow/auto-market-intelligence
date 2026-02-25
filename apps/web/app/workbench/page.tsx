'use client';

import React, { useState, useMemo } from 'react';
import { BubbleChart } from '@/components/charts/BubbleChart';
import { TrendChart } from '@/components/charts/TrendChart';
import AIChatPanel from '@/components/AIChatPanel';
import { FilterGroup, DateRangeFilter, PriceRangeFilter } from '@/components/filters/FilterComponents';
import { useFilterStore } from '@/lib/store';
import { 
  BRANDS, SEGMENTS, POWER_TYPES, BODY_TYPES, 
  generateMockData, getTopModels 
} from '@/lib/data';

export default function WorkbenchPage() {
  const [activeTab, setActiveTab] = useState<'bubble' | 'trend' | 'table' | 'ai'>('bubble');
  
  const filters = useFilterStore();
  const mockData = useMemo(() => generateMockData(), []);
  
  // 筛选数据
  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      if (filters.selectedBrands.length > 0 && !filters.selectedBrands.includes(item.brand)) return false;
      if (filters.selectedSegments.length > 0 && !filters.selectedSegments.includes(item.segment)) return false;
      if (filters.selectedPowerTypes.length > 0 && !filters.selectedPowerTypes.includes(item.powerType)) return false;
      if (filters.selectedBodyTypes.length > 0 && !filters.selectedBodyTypes.includes(item.bodyType)) return false;
      if (item.avgPrice < filters.minPrice || item.avgPrice > filters.maxPrice) return false;
      if (item.month < filters.startDate || item.month > filters.endDate) return false;
      return true;
    });
  }, [mockData, filters]);
  
  // 获取 Top 100 用于气泡图
  const topModels = useMemo(() => getTopModels(filteredData, 100), [filteredData]);
  
  // 气泡图数据
  const bubbleData = useMemo(() => {
    return topModels.map(item => ({
      name: item.name,
      brand: item.brand,
      x: item.wheelbase,
      y: Math.round(item.avgPrice * 10) / 10,
      size: item.salesVolume,
      color: POWER_TYPES.find(p => p.value === item.powerType)?.label || '其他',
    }));
  }, [topModels]);
  
  // 趋势图数据
  const trendData = useMemo(() => {
    const monthlyData = new Map<string, number>();
    filteredData.forEach(item => {
      const current = monthlyData.get(item.month) || 0;
      monthlyData.set(item.month, current + item.salesVolume);
    });
    
    return Array.from(monthlyData.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, value]) => ({ date, value }));
  }, [filteredData]);
  
  // 表格数据
  const tableData = useMemo(() => {
    return topModels.slice(0, 50).map((model, idx) => ({
      rank: idx + 1,
      ...model,
      powerTypeLabel: POWER_TYPES.find(p => p.value === model.powerType)?.label || model.powerType,
    }));
  }, [topModels]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">分析工作台</h1>
          <p className="text-sm text-gray-500 mt-1">
            筛选数据并生成可视化图表
          </p>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* 左侧筛选面板 */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">筛选条件</h2>
                <button
                  onClick={filters.resetFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  重置
                </button>
              </div>
              
              <DateRangeFilter
                startDate={filters.startDate}
                endDate={filters.endDate}
                onStartChange={filters.setStartDate}
                onEndChange={filters.setEndDate}
              />
              
              <FilterGroup
                title="品牌"
                options={BRANDS}
                selected={filters.selectedBrands}
                onChange={filters.setSelectedBrands}
              />
              
              <FilterGroup
                title="级别"
                options={SEGMENTS}
                selected={filters.selectedSegments}
                onChange={filters.setSelectedSegments}
              />
              
              <FilterGroup
                title="动力类型"
                options={POWER_TYPES}
                selected={filters.selectedPowerTypes}
                onChange={filters.setSelectedPowerTypes}
              />
              
              <FilterGroup
                title="车身类型"
                options={BODY_TYPES}
                selected={filters.selectedBodyTypes}
                onChange={filters.setSelectedBodyTypes}
              />
              
              <PriceRangeFilter
                minPrice={filters.minPrice}
                maxPrice={filters.maxPrice}
                onMinChange={filters.setMinPrice}
                onMaxChange={filters.setMaxPrice}
              />
            </div>
          </div>
          
          {/* 右侧图表区域 */}
          <div className="col-span-9">
            {/* 统计卡片 */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-gray-500">筛选后车型数</p>
                <p className="text-2xl font-bold text-blue-600">{topModels.length}</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-gray-500">总销量</p>
                <p className="text-2xl font-bold text-green-600">
                  {(filteredData.reduce((sum, item) => sum + item.salesVolume, 0) / 10000).toFixed(1)}万
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-gray-500">平均售价</p>
                <p className="text-2xl font-bold text-purple-600">
                  ¥{(filteredData.reduce((sum, item) => sum + item.avgPrice, 0) / filteredData.length || 0).toFixed(1)}万
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <p className="text-sm text-gray-500">数据月份</p>
                <p className="text-2xl font-bold text-orange-600">6个月</p>
              </div>
            </div>
            
            {/* 图表切换 */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  {[
                    { key: 'bubble', label: '气泡图' },
                    { key: 'trend', label: '趋势图' },
                    { key: 'table', label: '数据表' },
                    { key: 'ai', label: 'AI助手' },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as 'bubble' | 'trend' | 'table' | 'ai')}
                      className={`px-6 py-4 text-sm font-medium border-b-2 ${
                        activeTab === tab.key
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-6">
                {activeTab === 'bubble' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Top 100 车型分布（轴距 × 售价 × 销量）
                    </h3>
                    <BubbleChart
                      data={bubbleData}
                      title=""
                      xAxisName="轴距 (mm)"
                      yAxisName="平均售价 (万元)"
                    />
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">图表解读</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 右上角（大轴距+高售价+高销量）：高端旗舰，优先攻克</li>
                        <li>• 左下角（小轴距+低售价+高销量）：走量车型，量大但单价低</li>
                        <li>• 气泡大小代表销量规模</li>
                        <li>• 颜色区分动力类型</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'trend' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">销量趋势</h3>
                    <TrendChart
                      data={trendData}
                      title=""
                      yAxisName="销量 (辆)"
                    />
                  </div>
                )}
                
                {activeTab === 'table' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">数据明细</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">排名</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">车型</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">品牌</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">动力</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">轴距</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">均价</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">销量</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {tableData.map((model) => (
                            <tr key={model.id} className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-sm text-gray-900">{model.rank}</td>
                              <td className="px-4 py-3 text-sm font-medium text-gray-900">{model.name}</td>
                              <td className="px-4 py-3 text-sm text-gray-500">{model.brand}</td>
                              <td className="px-4 py-3 text-sm text-gray-500">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  model.powerType === 'bev' ? 'bg-green-100 text-green-800' :
                                  model.powerType === 'phev' ? 'bg-blue-100 text-blue-800' :
                                  model.powerType === 'erev' ? 'bg-purple-100 text-purple-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {model.powerTypeLabel}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-500 text-right">{model.wheelbase}mm</td>
                              <td className="px-4 py-3 text-sm text-gray-500 text-right">¥{model.avgPrice.toFixed(1)}万</td>
                              <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">
                                {model.salesVolume.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {activeTab === 'ai' && (
                  <AIChatPanel />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
