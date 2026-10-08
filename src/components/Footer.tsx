import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <footer className="mt-24 border-t transition-colors duration-200 bg-[#F3EDE2] border-[#E2D8C7] dark:bg-[#0E1511] dark:border-[#1E2E23]">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 border bg-[#1E3E2B] text-white border-emerald-900/60 shadow-xl dark:bg-[#142A1E] dark:border-[#234633]">
          
          {/* Subtle botanical background patterns */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#C85A32]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-800/80 text-emerald-200 border border-emerald-700/50 mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>The Saturday Balcony Dispatch</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#FAF7F2] mb-3">
              Get seasonal planting guides right in your inbox.
            </h3>
            
            <p className="text-sm sm:text-base text-emerald-100/80 mb-8 leading-relaxed">
              Every weekend, Maya shares balcony microclimate advice, sowing calendars, organic pest remedies, and container troubleshooting. Zero fluff, 100% small-space wisdom.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-900/80 border border-emerald-400/40 text-emerald-100 animate-fadeIn">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-white">Thanks for subscribing!</p>
                  <p className="text-xs text-emerald-200/90">Your first seasonal planting guide is on its way to your inbox.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address..."
                      aria-label="Email address for newsletter"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 text-sm transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#B84E27] active:scale-[0.98] text-white text-sm font-semibold tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-xs text-rose-300 font-medium text-left px-2">{error}</p>
                )}
                <p className="mt-3 text-[11px] text-emerald-200/60">
                  Strictly spam-free. One email every Saturday morning. Unsubscribe at any time with one click.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16 pt-8 border-t border-[#E5DBCA] dark:border-[#1E2E23]">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1E3E2B] text-emerald-300 flex items-center justify-center dark:bg-emerald-800 dark:text-emerald-100">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#1E3E2B] dark:text-[#E2ECE5]">
                The Balcony Gardener
              </span>
            </Link>
            <p className="text-sm text-[#5B6D62] dark:text-[#8FA898] leading-relaxed max-w-sm">
              Dedicated to helping urban dwellers, renters, and small-space lovers cultivate lush container paradises on balconies, fire escapes, windowsills, and compact rooftops.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#7B8D82] dark:text-[#6D8576]">
              <span>Handcrafted with organic curiosity</span>
              <span>•</span>
              <span>Portland, OR</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3E2B] dark:text-[#C5D9CC] mb-4">
              Explore Topics
            </h4>
            <ul className="space-y-2.5 text-sm text-[#5B6D62] dark:text-[#8FA898]">
              <li>
                <Link to="/#basics" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  Basics & Microclimates
                </Link>
              </li>
              <li>
                <Link to="/#herbs" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  Kitchen Herbs in Pots
                </Link>
              </li>
              <li>
                <Link to="/#vegetables" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  Crisp Vegetables & Fruit
                </Link>
              </li>
              <li>
                <Link to="/#flowers" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  Pollinator Flowers
                </Link>
              </li>
              <li>
                <Link to="/#care" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  Care, Soil & Natural Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3E2B] dark:text-[#C5D9CC] mb-4">
              The Journal
            </h4>
            <ul className="space-y-2.5 text-sm text-[#5B6D62] dark:text-[#8FA898]">
              <li>
                <Link to="/about" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  About Maya Green
                </Link>
              </li>
              <li>
                <Link to="/about#philosophy" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  5 Core Balcony Tenets
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-[#1E3E2B] dark:hover:text-white transition-colors">
                  Your Saved Reading List
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#E2D8C7] dark:border-[#1E2E23] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A8E82] dark:text-[#678272] gap-4">
          <p>© 2026 The Balcony Gardener. Written & curated by Maya Green. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Cultivated with care for small spaces everywhere</span>
            <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
};
