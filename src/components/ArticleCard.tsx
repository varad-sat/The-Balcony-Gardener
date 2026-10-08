import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { BotanicalIllustration } from './BotanicalIllustration';
import { Calendar, Clock, Bookmark, ArrowUpRight } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';

interface ArticleCardProps {
  post: Post;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(post.slug);
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col h-full rounded-2xl overflow-hidden border bg-[#FFFDF9] border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#203327] hover:border-[#C85A32]/50 dark:hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Cover Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1E3E2B]">
        {!imgError ? (
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BotanicalIllustration
            type={post.coverStyle.illustrationType}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Subtle dark gradient overlay on bottom for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#1E3E2B] backdrop-blur-sm shadow-xs dark:bg-[#121A15]/90 dark:text-emerald-300">
            {post.category}
          </span>
        </div>

        {/* Bookmark Icon Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleBookmark(post.slug);
          }}
          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md transition-colors cursor-pointer"
        >
          <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#C85A32] text-[#C85A32]' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-[#7B8F82] dark:text-[#88A694] mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          {/* Title */}
          <Link to={`/article/${post.slug}`} className="block group-hover:text-[#C85A32] dark:group-hover:text-emerald-400 transition-colors">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#173623] dark:text-[#FAF7F2] leading-snug mb-2.5">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-[#55695D] dark:text-[#A1B8AA] line-clamp-3 leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer: Author + Read Link */}
        <div className="pt-4 border-t border-[#EAE2D2] dark:border-[#1E3024] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {post.author.avatarImage ? (
              <img
                src={post.author.avatarImage}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-6 h-6 rounded-full object-cover border border-[#D5CBB9] dark:border-[#2C4134]"
              />
            ) : (
              <span className="text-base">{post.author.avatar}</span>
            )}
            <span className="font-medium text-[#2C4835] dark:text-[#C5D9CC]">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/article/${post.slug}`}
            className="inline-flex items-center gap-1 font-bold text-[#C85A32] group-hover:translate-x-0.5 transition-transform dark:text-emerald-400"
          >
            <span>Read</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </article>
  );
};
