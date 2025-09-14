import React from 'react';
import { Clock } from 'lucide-react';

const SearchHistory = ({ searchHistory, onQuickSearch }) => {
  if (searchHistory.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        Recent Search History
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {searchHistory.slice(0, 5).map((search, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 dark:text-white font-medium">{search.query}</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                    {search.type}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {search.results} results
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(search.timestamp).toLocaleDateString()} at {new Date(search.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
              <button
                onClick={() => onQuickSearch(search.query, search.type)}
                className="px-3 py-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Search Again
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;