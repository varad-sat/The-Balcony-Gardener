import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { BotanicalIllustration } from './BotanicalIllustration';
import { Calendar, Clock, ArrowRight, Bookmark } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';

interface FeaturedArticleProps {
  post: Post;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ post }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(post.slug);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="relative rounded-3xl overflow-hidden border border-[#E3DACB] bg-[#FFFDF9] dark:bg-[#15221B] dark:border-[#22362A] shadow-md hover:shadow-xl transition-all duration-300">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Cover Art Side (5 columns on desktop) */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-[#1E3E2B] flex items-center justify-center">
            {!imgError ? (
              <img
                src={post.imageUrl}
                alt={post.imageAlt}
                referrerPolicy="no-referrer"
                loading="eager"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <BotanicalIllustration
                type={post.coverStyle.illustrationType}
                className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700"
              />
            )}
            
            {/* Top Corner Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#1E3E2B] backdrop-blur-md shadow-sm">
                Featured Guide
              </span>
            </div>

            {/* Bookmark button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleBookmark(post.slug);
              }}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors cursor-pointer"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#C85A32] text-[#C85A32]' : ''}`} />
            </button>
          </div>

          {/* Content Side (7 columns on desktop) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EAE2D2] text-[#2C4835] dark:bg-[#20362A] dark:text-emerald-300">
                  {post.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#7B8F82] dark:text-[#88A694]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#7B8F82] dark:text-[#88A694]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTimeMinutes} min read</span>
                </div>
              </div>

              {/* Title */}
              <Link to={`/article/${post.slug}`} className="group">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173623] dark:text-[#FAF7F2] leading-tight group-hover:text-[#C85A32] transition-colors mb-4">
                  {post.title}
                </h2>
              </Link>

              {/* Subtitle / Excerpt */}
              <p className="text-[#55695D] dark:text-[#A1B8AA] text-sm sm:text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Key takeaway preview */}
              <div className="p-4 rounded-2xl bg-[#F6F1E7] border border-[#E7DECF] dark:bg-[#1B2B21] dark:border-[#274030] mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
                  Core Insight
                </span>
                <p className="text-xs sm:text-sm text-[#486052] dark:text-[#B3C9BD] italic">
                  "{post.quickTip.text}"
                </p>
              </div>
            </div>

            {/* Author info & Read More Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#EAE2D2] dark:border-[#22362A]">
              <div className="flex items-center gap-3">
                {post.author.avatarImage ? (
                  <img
                    src={post.author.avatarImage}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#D5CBB9] dark:border-[#2C4134]"
                  />
                ) : (
                  <span className="text-2xl p-2 rounded-full bg-[#EFEAE0] dark:bg-[#20362A]">
                    {post.author.avatar}
                  </span>
                )}
                <div>
                  <p className="text-sm font-bold text-[#1E3E2B] dark:text-[#E2ECE5]">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-[#7B8F82] dark:text-[#88A694]">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <Link
                to={`/article/${post.slug}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E3E2B] text-white hover:bg-[#152B1E] active:scale-[0.98] text-sm font-semibold tracking-wide transition-all shadow-sm dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
