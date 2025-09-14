import React from 'react';
import { BookOpen, Heart } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ favorites, onShowFavorites }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">BookFinder</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Academic & Research Library</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={onShowFavorites}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favorites</span>
              <span className="bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-2 py-1 rounded-full text-xs font-medium">
                {favorites.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;