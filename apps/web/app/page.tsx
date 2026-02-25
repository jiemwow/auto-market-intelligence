import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            中国汽车市场
            <span className="text-blue-600">智能分析平台</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            基于海量销量数据，提供灵活的数据筛选、透视分析和可视化呈现。
            助力智能驾驶解决方案的市场选择与商业决策。
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/workbench"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              开始分析
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-300"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">核心功能</h2>

          <div className="grid grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">灵活筛选</h3>
              <p className="text-gray-600">
                支持品牌、级别、动力类型、价格区间等多维度筛选，精准定位目标市场。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">数据可视化</h3>
              <p className="text-gray-600">
                气泡图、趋势图、热力图等多种图表，直观呈现市场格局和趋势。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI 智能分析</h3>
              <p className="text-gray-600">
                自然语言查询，智能洞察市场趋势，快速获取商业洞察。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">典型应用场景</h2>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">智能驾驶解决方案市场选择</h3>
                <p className="text-gray-600 mb-6">
                  通过气泡图分析，快速识别高价值目标车型。筛选 Top 100 车型，
                  以轴距为横轴、售价为纵轴、销量为气泡大小，一目了然地识别：
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    高端旗舰车型（大轴距+高售价+高销量）— 优先攻克
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    走量车型（小轴距+低售价+高销量）— 量大但单价低
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    蓝海市场（大轴距+低售价）— 潜在机会
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <div className="text-sm text-gray-500 mb-2">示例：气泡图分析</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-sm">X轴：轴距（从小到大）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-sm">Y轴：平均售价（从低到高）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                    <span className="text-sm">气泡大小：累计销量</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span className="text-sm">颜色：动力类型区分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">Auto Market Intelligence</h3>
              <p className="text-gray-400 mt-2">中国汽车市场数据分析平台</p>
            </div>
            <div className="text-sm text-gray-400">
              © 2026 Auto Market Intelligence. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
