/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { SavedPage } from './pages/SavedPage';

export default function App() {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#243329] dark:bg-[#121A15] dark:text-[#E2ECE5] transition-colors duration-200">
            <Navbar />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/saved" element={<SavedPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </HashRouter>
      </BookmarkProvider>
    </ThemeProvider>
  );
}
