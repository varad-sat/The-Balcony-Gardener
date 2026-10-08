import React, { createContext, useContext, useEffect, useState } from 'react';

interface BookmarkContextType {
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  bookmarkCount: number;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tbg_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tbg_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (slug: string) => {
    setBookmarks((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => bookmarks.includes(slug);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        bookmarkCount: bookmarks.length
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
