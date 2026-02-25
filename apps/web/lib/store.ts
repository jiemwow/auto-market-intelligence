import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FilterState {
  // 时间范围
  startDate: string;
  endDate: string;
  
  // 品牌筛选
  selectedBrands: string[];
  
  // 级别筛选
  selectedSegments: string[];
  
  // 动力类型
  selectedPowerTypes: string[];
  
  // 价格区间
  minPrice: number;
  maxPrice: number;
  
  // 车身类型
  selectedBodyTypes: string[];
  
  // 地域
  selectedRegions: string[];
  
  // 动作
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setSelectedBrands: (brands: string[]) => void;
  setSelectedSegments: (segments: string[]) => void;
  setSelectedPowerTypes: (types: string[]) => void;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  setSelectedBodyTypes: (types: string[]) => void;
  setSelectedRegions: (regions: string[]) => void;
  resetFilters: () => void;
}

const defaultState = {
  startDate: '2024-01',
  endDate: '2024-12',
  selectedBrands: [],
  selectedSegments: [],
  selectedPowerTypes: [],
  minPrice: 0,
  maxPrice: 100,
  selectedBodyTypes: [],
  selectedRegions: [],
};

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      ...defaultState,
      
      setStartDate: (date) => set({ startDate: date }),
      setEndDate: (date) => set({ endDate: date }),
      setSelectedBrands: (brands) => set({ selectedBrands: brands }),
      setSelectedSegments: (segments) => set({ selectedSegments: segments }),
      setSelectedPowerTypes: (types) => set({ selectedPowerTypes: types }),
      setMinPrice: (price) => set({ minPrice: price }),
      setMaxPrice: (price) => set({ maxPrice: price }),
      setSelectedBodyTypes: (types) => set({ selectedBodyTypes: types }),
      setSelectedRegions: (regions) => set({ selectedRegions: regions }),
      resetFilters: () => set(defaultState),
    }),
    {
      name: 'ami-filters',
    }
  )
);
