import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, Sun, Moon, Bookmark, Menu, X, BookOpen, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useBookmarks } from '../context/BookmarkContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { bookmarkCount } = useBookmarks();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-200 bg-[#FAF7F2]/90 border-[#E8E1D5] dark:bg-[#121A15]/90 dark:border-[#223328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3E2B] rounded-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1E3E2B] text-emerald-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 dark:bg-emerald-800 dark:text-emerald-100">
              <Sprout className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E3E2B] group-hover:text-[#C85A32] transition-colors dark:text-[#E2ECE5] dark:group-hover:text-emerald-400">
                The Balcony Gardener
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#735A4D] dark:text-[#8FA898]">
                Big Harvests From Small Spaces
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 py-1 ${
                isActive('/')
                  ? 'text-[#1E3E2B] border-b-2 border-[#1E3E2B] dark:text-emerald-400 dark:border-emerald-400'
                  : 'text-[#566B5E] hover:text-[#1E3E2B] dark:text-[#9FB7A8] dark:hover:text-white'
              }`}
            >
              Home
            </Link>

            <a
              href="#articles-section"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  // Let router handle navigation to home first
                  return;
                }
                e.preventDefault();
                document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-semibold text-[#566B5E] hover:text-[#1E3E2B] transition-colors py-1 dark:text-[#9FB7A8] dark:hover:text-white flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              Articles & Guides
            </a>

            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 py-1 ${
                isActive('/about')
                  ? 'text-[#1E3E2B] border-b-2 border-[#1E3E2B] dark:text-emerald-400 dark:border-emerald-400'
                  : 'text-[#566B5E] hover:text-[#1E3E2B] dark:text-[#9FB7A8] dark:hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              About Maya
            </Link>

            <Link
              to="/saved"
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 py-1 ${
                isActive('/saved')
                  ? 'text-[#1E3E2B] border-b-2 border-[#1E3E2B] dark:text-emerald-400 dark:border-emerald-400'
                  : 'text-[#566B5E] hover:text-[#1E3E2B] dark:text-[#9FB7A8] dark:hover:text-white'
              }`}
              title="Saved Guides"
            >
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
              {bookmarkCount > 0 && (
                <span className="inline-flex items-center justify-center text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#C85A32] text-white">
                  {bookmarkCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Right Action: Dark Mode & Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-xl border border-[#E0D7C9] text-[#2C4A38] hover:bg-[#EFEAE1] transition-colors dark:border-[#2C4134] dark:text-[#A7C7B2] dark:hover:bg-[#1B2B20]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1E3E2B]" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="md:hidden p-2.5 rounded-xl border border-[#E0D7C9] text-[#2C4A38] hover:bg-[#EFEAE1] transition-colors dark:border-[#2C4134] dark:text-[#A7C7B2] dark:hover:bg-[#1B2B20]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E1D5] bg-[#FAF7F2] dark:bg-[#121A15] dark:border-[#223328] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/')
                ? 'bg-[#EAE4D7] text-[#1E3E2B] dark:bg-[#1C2C22] dark:text-emerald-400'
                : 'text-[#485E50] hover:bg-[#EAE4D7]/50 dark:text-[#9FB7A8]'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/about')
                ? 'bg-[#EAE4D7] text-[#1E3E2B] dark:bg-[#1C2C22] dark:text-emerald-400'
                : 'text-[#485E50] hover:bg-[#EAE4D7]/50 dark:text-[#9FB7A8]'
            }`}
          >
            About Maya & Philosophy
          </Link>

          <Link
            to="/saved"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/saved')
                ? 'bg-[#EAE4D7] text-[#1E3E2B] dark:bg-[#1C2C22] dark:text-emerald-400'
                : 'text-[#485E50] hover:bg-[#EAE4D7]/50 dark:text-[#9FB7A8]'
            }`}
          >
            <span className="flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Saved Articles
            </span>
            {bookmarkCount > 0 && (
              <span className="inline-flex items-center justify-center text-xs font-bold px-2 py-0.5 rounded-full bg-[#C85A32] text-white">
                {bookmarkCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
};
