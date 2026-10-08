import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  resultCount
}) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8E81] dark:text-[#88A694]" />
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title, crop, soil, pests..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm border bg-[#FFFDF9] border-[#E3DACB] text-[#1E3E2B] placeholder-[#8A9C90] focus:outline-none focus:ring-2 focus:ring-[#1E3E2B] dark:bg-[#16241C] dark:border-[#243A2C] dark:text-[#E2ECE5] dark:placeholder-[#6C8575] dark:focus:ring-emerald-500 transition-all shadow-xs"
        />

        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#7A8E81] hover:text-[#1E3E2B] dark:hover:text-white cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {searchQuery && typeof resultCount === 'number' && (
        <p className="absolute -bottom-6 left-1 text-[11px] text-[#7A8E81] dark:text-[#88A694]">
          Found {resultCount} {resultCount === 1 ? 'article' : 'articles'}
        </p>
      )}
    </div>
  );
};
