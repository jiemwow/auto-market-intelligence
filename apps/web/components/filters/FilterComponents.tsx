'use client';

import React from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  multiple?: boolean;
}

export function FilterGroup({
  title,
  options,
  selected,
  onChange,
  multiple = true,
}: FilterGroupProps) {
  const handleToggle = (value: string) => {
    if (multiple) {
      if (selected.includes(value)) {
        onChange(selected.filter(v => v !== value));
      } else {
        onChange([...selected, value]);
      }
    } else {
      onChange(selected.includes(value) ? [] : [value]);
    }
  };

  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleToggle(option.value)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selected.includes(option.value)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface DateRangeFilterProps {
  startDate: string;
  endDate: string;
  onStartChange: (date: string) => void;
  onEndChange: (date: string) => void;
}

export function DateRangeFilter({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
}: DateRangeFilterProps) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">时间范围</h4>
      <div className="flex items-center gap-3">
        <input
          type="month"
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">至</span>
        <input
          type="month"
          value={endDate}
          onChange={(e) => onEndChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onMinChange: (price: number) => void;
  onMaxChange: (price: number) => void;
}

export function PriceRangeFilter({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: PriceRangeFilterProps) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">价格区间 (万元)</h4>
      <div className="flex items-center gap-3">
        <input
          type="number"
          min={0}
          max={200}
          value={minPrice}
          onChange={(e) => onMinChange(Number(e.target.value))}
          className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          min={0}
          max={200}
          value={maxPrice}
          onChange={(e) => onMaxChange(Number(e.target.value))}
          className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
