// 品牌列表
export const BRANDS = [
  { value: 'byd', label: '比亚迪' },
  { value: 'tesla', label: '特斯拉' },
  { value: 'vw', label: '大众' },
  { value: 'toyota', label: '丰田' },
  { value: 'honda', label: '本田' },
  { value: 'nissan', label: '日产' },
  { value: 'bmw', label: '宝马' },
  { value: 'benz', label: '奔驰' },
  { value: 'audi', label: '奥迪' },
  { value: 'nio', label: '蔚来' },
  { value: 'xpeng', label: '小鹏' },
  { value: 'li', label: '理想' },
  { value: 'zeekr', label: '极氪' },
  { value: 'wuling', label: '五菱' },
  { value: 'changan', label: '长安' },
  { value: 'geely', label: '吉利' },
  { value: 'greatwall', label: '长城' },
];

// 级别
export const SEGMENTS = [
  { value: 'A00', label: 'A00级' },
  { value: 'A0', label: 'A0级' },
  { value: 'A', label: 'A级' },
  { value: 'B', label: 'B级' },
  { value: 'C', label: 'C级' },
  { value: 'D', label: 'D级' },
];

// 动力类型
export const POWER_TYPES = [
  { value: 'ice', label: '燃油' },
  { value: 'phev', label: '插混' },
  { value: 'bev', label: '纯电' },
  { value: 'erev', label: '增程' },
];

// 车身类型
export const BODY_TYPES = [
  { value: 'sedan', label: '轿车' },
  { value: 'suv', label: 'SUV' },
  { value: 'mpv', label: 'MPV' },
  { value: 'wagon', label: '旅行车' },
];

// 地域
export const REGIONS = [
  { value: 'national', label: '全国' },
  { value: 'tier1', label: '一线城市' },
  { value: 'tier2', label: '二线城市' },
  { value: 'tier3', label: '三线城市' },
  { value: 'tier4', label: '四线及以下' },
];

// 模拟数据 - 车型销量数据
export interface ModelSalesData {
  id: string;
  name: string;
  brand: string;
  segment: string;
  powerType: string;
  bodyType: string;
  wheelbase: number;
  avgPrice: number;
  salesVolume: number;
  month: string;
}

// 生成模拟数据
export function generateMockData(): ModelSalesData[] {
  const data: ModelSalesData[] = [];
  const months = ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06'];
  
  const models = [
    { name: '秦PLUS DM-i', brand: '比亚迪', segment: 'A', powerType: 'phev', bodyType: 'sedan', wheelbase: 2718, basePrice: 12, baseSales: 25000 },
    { name: 'Model Y', brand: '特斯拉', segment: 'B', powerType: 'bev', bodyType: 'suv', wheelbase: 2890, basePrice: 26, baseSales: 45000 },
    { name: '轩逸', brand: '日产', segment: 'A', powerType: 'ice', bodyType: 'sedan', wheelbase: 2700, basePrice: 11, baseSales: 28000 },
    { name: '朗逸', brand: '大众', segment: 'A', powerType: 'ice', bodyType: 'sedan', wheelbase: 2688, basePrice: 12, baseSales: 22000 },
    { name: '理想L7', brand: '理想', segment: 'B', powerType: 'erev', bodyType: 'suv', wheelbase: 3005, basePrice: 32, baseSales: 15000 },
    { name: '问界M7', brand: '问界', segment: 'B', powerType: 'erev', bodyType: 'suv', wheelbase: 2820, basePrice: 25, baseSales: 18000 },
    { name: '宝马3系', brand: '宝马', segment: 'B', powerType: 'ice', bodyType: 'sedan', wheelbase: 2851, basePrice: 32, baseSales: 12000 },
    { name: '奔驰C级', brand: '奔驰', segment: 'B', powerType: 'ice', bodyType: 'sedan', wheelbase: 2954, basePrice: 33, baseSales: 11000 },
    { name: '宏光MINI', brand: '五菱', segment: 'A00', powerType: 'bev', bodyType: 'sedan', wheelbase: 1940, basePrice: 4, baseSales: 15000 },
    { name: '海豚', brand: '比亚迪', segment: 'A0', powerType: 'bev', bodyType: 'sedan', wheelbase: 2700, basePrice: 11, baseSales: 18000 },
    { name: '元PLUS', brand: '比亚迪', segment: 'A', powerType: 'bev', bodyType: 'suv', wheelbase: 2720, basePrice: 14, baseSales: 22000 },
    { name: '宋PLUS DM-i', brand: '比亚迪', segment: 'A', powerType: 'phev', bodyType: 'suv', wheelbase: 2765, basePrice: 16, baseSales: 28000 },
    { name: '凯美瑞', brand: '丰田', segment: 'B', powerType: 'ice', bodyType: 'sedan', wheelbase: 2825, basePrice: 19, baseSales: 16000 },
    { name: '雅阁', brand: '本田', segment: 'B', powerType: 'ice', bodyType: 'sedan', wheelbase: 2830, basePrice: 18, baseSales: 14000 },
    { name: '速腾', brand: '大众', segment: 'A', powerType: 'ice', bodyType: 'sedan', wheelbase: 2731, basePrice: 14, baseSales: 18000 },
    { name: '帕萨特', brand: '大众', segment: 'B', powerType: 'ice', bodyType: 'sedan', wheelbase: 2871, basePrice: 20, baseSales: 16000 },
    { name: 'Model 3', brand: '特斯拉', segment: 'B', powerType: 'bev', bodyType: 'sedan', wheelbase: 2875, basePrice: 23, baseSales: 20000 },
    { name: '汉EV', brand: '比亚迪', segment: 'B', powerType: 'bev', bodyType: 'sedan', wheelbase: 2920, basePrice: 22, baseSales: 12000 },
    { name: '极氪001', brand: '极氪', segment: 'C', powerType: 'bev', bodyType: 'wagon', wheelbase: 3005, basePrice: 27, baseSales: 8000 },
    { name: '蔚来ES6', brand: '蔚来', segment: 'B', powerType: 'bev', bodyType: 'suv', wheelbase: 2915, basePrice: 34, baseSales: 7000 },
  ];
  
  months.forEach((month) => {
    models.forEach((model) => {
      // 添加一些随机波动
      const randomFactor = 0.8 + Math.random() * 0.4;
      const seasonalFactor = 1 + Math.sin(parseInt(month.split('-')[1]) * Math.PI / 6) * 0.1;
      
      data.push({
        id: `${model.name}-${month}`,
        name: model.name,
        brand: model.brand,
        segment: model.segment,
        powerType: model.powerType,
        bodyType: model.bodyType,
        wheelbase: model.wheelbase,
        avgPrice: model.basePrice * (0.95 + Math.random() * 0.1),
        salesVolume: Math.round(model.baseSales * randomFactor * seasonalFactor),
        month,
      });
    });
  });
  
  return data;
}

// 获取 Top N 车型（按累计销量）
export function getTopModels(data: ModelSalesData[], n: number = 100): ModelSalesData[] {
  const modelMap = new Map<string, ModelSalesData & { totalSales: number }>();
  
  data.forEach(item => {
    const existing = modelMap.get(item.name);
    if (existing) {
      existing.totalSales += item.salesVolume;
      existing.avgPrice = (existing.avgPrice * existing.totalSales + item.avgPrice * item.salesVolume) / (existing.totalSales + item.salesVolume);
    } else {
      modelMap.set(item.name, { ...item, totalSales: item.salesVolume });
    }
  });
  
  return Array.from(modelMap.values())
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, n)
    .map(item => ({
      ...item,
      salesVolume: item.totalSales,
    }));
}
