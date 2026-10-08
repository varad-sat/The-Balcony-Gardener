import React, { useState, useMemo } from 'react';
import { Category, Post } from '../types';
import { allPosts, CATEGORIES, getFeaturedPost } from '../data/posts';
import { HeroSection } from '../components/HeroSection';
import { FeaturedArticle } from '../components/FeaturedArticle';
import { CategoryFilter } from '../components/CategoryFilter';
import { SearchBar } from '../components/SearchBar';
import { ArticleCard } from '../components/ArticleCard';
import { BookOpen, RefreshCw, Sprout } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = useMemo(() => getFeaturedPost(), []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      All: allPosts.length,
      Basics: 0,
      Herbs: 0,
      Vegetables: 0,
      Flowers: 0,
      'Care & Problems': 0
    };

    allPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });

    return counts;
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allPosts.filter((post) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      if (!matchesCategory) return false;

      // Search query check (title, excerpt, subtitle, tags, and section content)
      if (!query) return true;

      const inTitle = post.title.toLowerCase().includes(query);
      const inExcerpt = post.excerpt.toLowerCase().includes(query);
      const inSubtitle = post.subtitle.toLowerCase().includes(query);
      const inTags = post.tags.some((tag) => tag.toLowerCase().includes(query));
      const inSections = post.sections.some(
        (sec) =>
          sec.heading.toLowerCase().includes(query) ||
          sec.paragraphs.some((p) => p.toLowerCase().includes(query))
      );

      return inTitle || inExcerpt || inSubtitle || inTags || inSections;
    });
  }, [selectedCategory, searchQuery]);

  const isFiltering = selectedCategory !== 'All' || searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <HeroSection />

      {/* Primary Featured Article (Shown when no active search/category filter is applied) */}
      {!isFiltering && <FeaturedArticle post={featuredPost} />}

      {/* Main Articles Grid Section */}
      <section id="articles-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col gap-6 mb-10 pb-6 border-b border-[#E6DECF] dark:border-[#22362A]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-emerald-400 mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Field Notes & Cultivation Guides</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173623] dark:text-[#FAF7F2]">
                Explore All Articles
              </h2>
            </div>

            {/* Live Search */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              resultCount={filteredPosts.length}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </div>
        </div>

        {/* Results Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 px-4 rounded-3xl border border-dashed border-[#DACFBF] dark:border-[#243A2C] bg-[#F7F2E8] dark:bg-[#15221B]/60 max-w-lg mx-auto">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#E5DDD0] dark:bg-[#1E3024] flex items-center justify-center text-[#7A8E81] mb-4">
              <Sprout className="w-7 h-7 text-[#C85A32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
              No matching guides found
            </h3>
            <p className="text-sm text-[#5B6D62] dark:text-[#8FA898] mb-6">
              We couldn’t find any articles matching "{searchQuery}". Try searching for herbs, watering, sunlight, or compost.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E3E2B] text-white text-xs font-semibold hover:bg-[#152B1E] dark:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </section>
    </div>
  );
};
