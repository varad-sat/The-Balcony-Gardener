import React from 'react';
import { Sprout, SunMedium, Compass, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-20 overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-200/20 via-amber-100/30 to-orange-200/20 blur-3xl rounded-full pointer-events-none dark:from-emerald-950/20 dark:via-emerald-900/10 dark:to-orange-950/15" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#E8E2D5] text-[#2C4835] border border-[#D5CBB9] mb-6 dark:bg-[#1C2C22] dark:text-emerald-300 dark:border-[#2C4635] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32] dark:text-emerald-400" />
          <span>Urban Container Horticulture • 2026 Edition</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#173623] dark:text-[#FAF7F2] leading-[1.12] mb-6">
          The Balcony Gardener
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl text-[#C85A32] dark:text-[#E27D60] font-normal mb-6">
          “Big harvests from small spaces”
        </p>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg text-[#55695D] dark:text-[#A1B8AA] max-w-2xl mx-auto leading-relaxed mb-10">
          A field guide for growing thriving plants, aromatic kitchen herbs, crisp vegetables, and pollinator-friendly blossoms on high-rise balconies, windowsills, and compact fire escapes.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-4 border-t border-[#E5DDD0] dark:border-[#223328] text-xs sm:text-sm font-medium text-[#486052] dark:text-[#8EAAA0]">
          <div className="flex items-center justify-center gap-2 py-2">
            <Sprout className="w-4 h-4 text-[#1E3E2B] dark:text-emerald-400" />
            <span>100% Container Tested</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 border-y sm:border-y-0 sm:border-x border-[#E5DDD0] dark:border-[#223328]">
            <Compass className="w-4 h-4 text-[#C85A32]" />
            <span>Zero Yard Required</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2">
            <SunMedium className="w-4 h-4 text-amber-500" />
            <span>Urban Microclimate Science</span>
          </div>
        </div>

      </div>
    </section>
  );
};
