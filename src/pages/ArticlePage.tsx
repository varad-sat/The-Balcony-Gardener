import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  getPostBySlug,
  getAdjacentPosts,
  getRelatedPosts,
  calculateTotalWordCount
} from '../data/posts';
import { BotanicalIllustration } from '../components/BotanicalIllustration';
import { ArticleCard } from '../components/ArticleCard';
import { useBookmarks } from '../context/BookmarkContext';
import {
  Calendar,
  Clock,
  Bookmark,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ArrowLeft,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const post = slug ? getPostBySlug(slug) : undefined;
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="font-serif text-3xl font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-4">
          Article Not Found
        </h2>
        <p className="text-[#55695D] dark:text-[#8FA898] mb-8">
          The guide you are looking for may have moved or sprouted somewhere else.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3E2B] text-white text-sm font-semibold hover:bg-[#152B1E] dark:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>
    );
  }

  const { prevPost, nextPost } = getAdjacentPosts(post.slug);
  const relatedPosts = getRelatedPosts(post.slug, 3);
  const bookmarked = isBookmarked(post.slug);
  const totalWords = calculateTotalWordCount(post);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="min-h-screen pb-24">
      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-[#E8E1D5] dark:border-[#223328] bg-[#F7F2E8]/60 dark:bg-[#131E18]/60 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#6B7F72] dark:text-[#8BA595]">
          <nav className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
            <span className="font-medium text-[#1E3E2B] dark:text-emerald-400">
              {post.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
            <span className="truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1 hover:text-[#1E3E2B] dark:hover:text-white transition-colors font-medium shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Guides</span>
          </Link>
        </div>
      </div>

      {/* Article Header & Cover Banner */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
        
        {/* Category & Read Info */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5DDD0] text-[#1E3E2B] dark:bg-[#1C2C22] dark:text-emerald-300">
            {post.category}
          </span>
          <span className="text-xs text-[#7B8F82] dark:text-[#88A694] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="text-xs text-[#7B8F82] dark:text-[#88A694] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTimeMinutes} min read ({totalWords} words)
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#173623] dark:text-[#FAF7F2] leading-[1.18] mb-6">
          {post.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#55695D] dark:text-[#A1B8AA] leading-relaxed mb-8 font-light">
          {post.subtitle}
        </p>

        {/* Author Bio Bar & Article Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-y border-[#E6DECF] dark:border-[#22362A] mb-8">
          <div className="flex items-center gap-3.5">
            {post.author.avatarImage ? (
              <img
                src={post.author.avatarImage}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-[#D5CBB9] dark:border-[#2C4134] shadow-xs"
              />
            ) : (
              <span className="text-3xl p-2 rounded-2xl bg-[#EFEAE0] dark:bg-[#1C2B22]">
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

          {/* Social Share & Bookmark Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#DED5C7] text-xs font-semibold text-[#324B3C] hover:bg-[#EFEAE1] dark:border-[#2C4134] dark:text-[#9FB7A8] dark:hover:bg-[#1A2820] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Guide</span>
                </>
              )}
            </button>

            <button
              onClick={() => toggleBookmark(post.slug)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                bookmarked
                  ? 'bg-[#C85A32] text-white border-[#C85A32]'
                  : 'border-[#DED5C7] text-[#324B3C] hover:bg-[#EFEAE1] dark:border-[#2C4134] dark:text-[#9FB7A8] dark:hover:bg-[#1A2820]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
              <span>{bookmarked ? 'Saved' : 'Save for Later'}</span>
            </button>
          </div>
        </div>

        {/* Cover Art Banner */}
        <div className="relative w-full h-[320px] sm:h-[460px] rounded-3xl overflow-hidden border border-[#E3DACB] dark:border-[#22362A] shadow-md bg-[#1E3E2B]">
          {!imgError ? (
            <img
              src={post.imageUrl}
              alt={post.imageAlt}
              referrerPolicy="no-referrer"
              loading="eager"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <BotanicalIllustration
              type={post.coverStyle.illustrationType}
              className="w-full h-full object-cover"
            />
          )}
          {/* Subtle gradient overlay on bottom for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

      </header>

      {/* Main Article Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Key Takeaways Box */}
        <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#F6F1E6] border border-[#E3D9C9] dark:bg-[#16241C] dark:border-[#22382B] shadow-xs">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#1E3E2B] dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4 text-[#C85A32] dark:text-emerald-400" />
            <span>Key Guide Takeaways</span>
          </div>
          <ul className="space-y-2.5">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#486052] dark:text-[#A1B8AA] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] dark:bg-emerald-400 mt-2 shrink-0" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Sections */}
        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-5">
              
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#173623] dark:text-[#FAF7F2] leading-tight pt-4">
                {section.heading}
              </h2>

              {section.subheading && (
                <p className="text-sm sm:text-base font-medium italic text-[#C85A32] dark:text-[#E27D60]">
                  {section.subheading}
                </p>
              )}

              {/* Paragraphs */}
              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base sm:text-lg text-[#3E5245] dark:text-[#CBDCD1] leading-[1.8] font-normal"
                >
                  {p}
                </p>
              ))}

              {/* Step by Step Breakdown */}
              {section.steps && section.steps.length > 0 && (
                <div className="my-6 space-y-3.5">
                  {section.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#E5DDCF] dark:bg-[#18281E] dark:border-[#243B2D] flex items-start gap-4 shadow-2xs"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#1E3E2B] text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 dark:bg-emerald-800 dark:text-white">
                        {sIdx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#55695D] dark:text-[#A1B8AA] leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="my-4 space-y-2.5 p-4 sm:p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC0] dark:bg-[#15221B] dark:border-[#22362A]">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5 text-sm text-[#3E5245] dark:text-[#CBDCD1] leading-relaxed">
                      <span className="text-[#C85A32] font-bold mt-0.5">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

            </section>
          ))}
        </div>

        {/* Highlighted Quick Tip Callout Box */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#FAF0E6] border-2 border-[#E8CDBB] dark:bg-[#251A15] dark:border-[#4D2F23] shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E27D60] block mb-1">
                Maya's Quick Tip
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#451B0D] dark:text-[#FEECE5] mb-2">
                {post.quickTip.title}
              </h3>
              <p className="text-sm sm:text-base text-[#613322] dark:text-[#EAC2B0] leading-relaxed">
                {post.quickTip.text}
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="pt-6 border-t border-[#E6DECF] dark:border-[#22362A]">
          <h3 className="font-serif text-2xl font-bold text-[#173623] dark:text-[#FAF7F2] mb-3">
            Final Thoughts
          </h3>
          <p className="text-base sm:text-lg text-[#3E5245] dark:text-[#CBDCD1] leading-[1.8] italic">
            "{post.conclusion}"
          </p>
        </div>

        {/* Author Bio Box */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#F6F1E6] border border-[#E3D9C9] dark:bg-[#16241C] dark:border-[#22382B] flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          {post.author.avatarImage ? (
            <img
              src={post.author.avatarImage}
              alt={post.author.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#D5CBB9] dark:border-[#2C4134] shadow-sm shrink-0"
            />
          ) : (
            <span className="text-5xl p-3 rounded-2xl bg-[#EDE6D8] dark:bg-[#1C2C22] shrink-0">
              {post.author.avatar}
            </span>
          )}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#1E3E2B] dark:text-[#FAF7F2] mb-1">
              About {post.author.name}
            </h4>
            <p className="text-xs font-semibold text-[#C85A32] uppercase tracking-wider mb-2">
              {post.author.role}
            </p>
            <p className="text-sm text-[#55695D] dark:text-[#A1B8AA] leading-relaxed mb-3">
              {post.author.bio}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1E3E2B] dark:text-emerald-400 hover:underline"
            >
              <span>Learn more about Maya’s balcony garden philosophy</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Previous / Next Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12 pt-8 border-t border-[#E6DECF] dark:border-[#22362A]">
          {prevPost ? (
            <Link
              to={`/article/${prevPost.slug}`}
              className="p-4 sm:p-5 rounded-2xl border bg-[#FFFDF9] border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#203327] hover:border-[#1E3E2B] dark:hover:border-emerald-500 group transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#7B8F82] dark:text-[#88A694] mb-2 group-hover:text-[#1E3E2B] dark:group-hover:text-emerald-400">
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous Article</span>
                </span>
                <h4 className="font-serif text-base font-bold text-[#173623] dark:text-[#FAF7F2] group-hover:text-[#C85A32] line-clamp-2">
                  {prevPost.title}
                </h4>
              </div>
              <span className="text-[11px] text-[#7B8F82] dark:text-[#88A694] mt-2 block">
                {prevPost.category} • {prevPost.readTimeMinutes} min
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link
              to={`/article/${nextPost.slug}`}
              className="p-4 sm:p-5 rounded-2xl border bg-[#FFFDF9] border-[#E5DDCF] dark:bg-[#15221B] dark:border-[#203327] hover:border-[#1E3E2B] dark:hover:border-emerald-500 group transition-all text-right flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-end gap-1 text-xs font-semibold text-[#7B8F82] dark:text-[#88A694] mb-2 group-hover:text-[#1E3E2B] dark:group-hover:text-emerald-400">
                  <span>Next Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <h4 className="font-serif text-base font-bold text-[#173623] dark:text-[#FAF7F2] group-hover:text-[#C85A32] line-clamp-2">
                  {nextPost.title}
                </h4>
              </div>
              <span className="text-[11px] text-[#7B8F82] dark:text-[#88A694] mt-2 block">
                {nextPost.category} • {nextPost.readTimeMinutes} min
              </span>
            </Link>
          )}
        </div>

      </main>

      {/* You Might Also Like Section (3 Related Posts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-[#E6DECF] dark:border-[#22362A]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] dark:text-emerald-400 block mb-1">
              Curated Recommendations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173623] dark:text-[#FAF7F2]">
              You might also like
            </h3>
          </div>
          <Link
            to="/"
            className="text-xs sm:text-sm font-semibold text-[#1E3E2B] dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>View all articles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((related) => (
            <ArticleCard key={related.id} post={related} />
          ))}
        </div>
      </section>

    </article>
  );
};
