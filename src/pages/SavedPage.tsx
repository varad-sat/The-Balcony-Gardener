import React from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../context/BookmarkContext';
import { allPosts } from '../data/posts';
import { ArticleCard } from '../components/ArticleCard';
import { Bookmark, ArrowLeft, Sprout } from 'lucide-react';

export const SavedPage: React.FC = () => {
  const { bookmarks } = useBookmarks();
  const savedPosts = allPosts.filter((post) => bookmarks.includes(post.slug));

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10 pb-6 border-b border-[#E6DECF] dark:border-[#22362A] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-emerald-400 mb-1">
              <Bookmark className="w-4 h-4 fill-current" />
              <span>Personal Field Notebook</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#173623] dark:text-[#FAF7F2]">
              Saved Articles & Guides
            </h1>
            <p className="text-sm text-[#55695D] dark:text-[#A1B8AA] mt-1">
              {savedPosts.length} {savedPosts.length === 1 ? 'guide' : 'guides'} saved for quick reference on your balcony.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3E2B] dark:text-emerald-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Saved List */}
        {savedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 px-4 rounded-3xl border border-dashed border-[#DACFBF] dark:border-[#243A2C] bg-[#F7F2E8] dark:bg-[#15221B]/60 max-w-lg mx-auto">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#E5DDD0] dark:bg-[#1E3024] flex items-center justify-center text-[#7A8E81] mb-4">
              <Bookmark className="w-6 h-6 text-[#C85A32]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-2">
              No saved guides yet
            </h3>
            <p className="text-sm text-[#5B6D62] dark:text-[#8FA898] mb-6">
              Click the bookmark icon on any guide or article to save it here for fast offline consultation during potting and watering.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E3E2B] text-white text-xs font-semibold hover:bg-[#152B1E] dark:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Browse All 10 Guides</span>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};
