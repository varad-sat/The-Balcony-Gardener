import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../data/posts';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  categoryCounts: Record<Category, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        const count = categoryCounts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              isSelected
                ? 'bg-[#1E3E2B] text-white shadow-sm dark:bg-emerald-600 dark:text-white'
                : 'bg-[#F2ECE0] text-[#475C4E] hover:bg-[#EAE2D2] dark:bg-[#1B2920] dark:text-[#9FB7A8] dark:hover:bg-[#23352A]'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isSelected
                  ? 'bg-white/20 text-white'
                  : 'bg-[#E2D8C6] text-[#475C4E] dark:bg-[#152019] dark:text-[#88A694]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
