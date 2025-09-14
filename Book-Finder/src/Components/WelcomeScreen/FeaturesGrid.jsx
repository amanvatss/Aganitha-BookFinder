import React from 'react';
import { Search, Heart, Download, Filter } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <Search className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Search</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Search by title, author, subject, or ISBN</p>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <Heart className="w-8 h-8 text-red-500 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Save Favorites</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Keep track of books you want to read</p>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <Download className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free E-books</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Access thousands of free digital books</p>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <Filter className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Advanced Filters</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Filter by year, language, and format</p>
      </div>
    </div>
  );
};

export default FeaturesGrid;