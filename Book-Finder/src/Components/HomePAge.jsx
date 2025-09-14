import React, { useState, useEffect, useCallback } from 'react';
import { Search, Book, Star, BookOpen, Calendar, User, Filter, X, Heart, ExternalLink, Download, Clock, TrendingUp, Sun, Moon } from 'lucide-react';
import Header from './Header';
import SearchForm from './SearchForm';
import QuickSearch from './QuickSearch';
import BookCard from './BookCard';
import BookDetailModal from './BookDetailModal';
import FavoritesModal from './FavoriteModal';
import WelcomeScreen from './WelcomeScreen';
import SearchHistory from './WelcomeScreen/SearchHistory';
import { DarkModeProvider } from '../context/DarkModeContext';
import { searchBooksApi } from '../utilis/api';
import { POPULAR_SEARCHES } from '../utilis/helpers';

const App = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [filters, setFilters] = useState({
    publishYear: '',
    language: '',
    hasEbook: false,
    minRating: 0
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  // Load saved data from memory state management (instead of localStorage)
  useEffect(() => {
    // For this demo, we'll start with empty state
    // In a real app, you might load from a backend or use proper state management
  }, []);

  // Search function with API integration
  const searchBooks = useCallback(async (query, type = 'title') => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const results = await searchBooksApi(query, type, filters);
      
      if (results) {
        setBooks(results);
        
        // Add to search history
        const newSearch = {
          query, 
          type, 
          timestamp: Date.now(), 
          results: results.length
        };
        setSearchHistory(prev => [newSearch, ...prev.slice(0, 9)]);
        
        // Add to recent searches if not already there
        if (!recentSearches.includes(query)) {
          setRecentSearches(prev => [query, ...prev.slice(0, 7)]);
        }
      } else {
        setBooks([]);
      }
    } catch (err) {
      setError('Failed to search books. Please check your connection and try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, [filters, recentSearches]);

  // Handle search form submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchBooks(searchQuery, searchType);
    }
  };

  // Toggle favorite status of a book
  const toggleFavorite = (book) => {
    const bookId = book.key;
    setFavorites(prev => {
      if (prev.find(fav => fav.key === bookId)) {
        return prev.filter(fav => fav.key !== bookId);
      } else {
        return [...prev, { ...book, favoritedAt: Date.now() }];
      }
    });
  };

  // Check if book is in favorites
  const isFavorite = (book) => {
    return favorites.some(fav => fav.key === book.key);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      publishYear: '',
      language: '',
      hasEbook: false,
      minRating: 0
    });
  };

  // Quick search function
  const quickSearch = (query, type = 'subject') => {
    setSearchQuery(query);
    setSearchType(type);
    searchBooks(query, type);
  };

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Header */}
        <Header 
          favorites={favorites}
          onShowFavorites={() => setSelectedBook('favorites')}
        />

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchType={searchType}
            setSearchType={setSearchType}
            onSearch={handleSearch}
            loading={loading}
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            onClearFilters={clearFilters}
          />

          {/* Quick Search Suggestions */}
          {!loading && books.length === 0 && !searchQuery && (
            <div className="mt-6">
              <QuickSearch
                recentSearches={recentSearches}
                popularSearches={POPULAR_SEARCHES}
                onQuickSearch={quickSearch}
                searchType={searchType}
              />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg flex items-center gap-2">
              <X className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {loading ? 'Searching...' : `${books.length} results for "${searchQuery}"`}
              </h2>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Searching the library...</p>
            </div>
          ) : books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {books.map((book, index) => (
                <BookCard 
                  key={`${book.key}-${index}`} 
                  book={book} 
                  onToggleFavorite={toggleFavorite}
                  onShowDetails={setSelectedBook}
                  isFavorite={isFavorite}
                />
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center py-16">
              <Book className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No books found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try different keywords or check your spelling.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setBooks([]);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <WelcomeScreen />
          )}

          {/* Favorites Section */}
          {favorites.length > 0 && !searchQuery && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  Your Favorites ({favorites.length})
                </h2>
                {favorites.length > 12 && (
                  <button
                    onClick={() => setSelectedBook('favorites')}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View All →
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {favorites.slice(0, 12).map((book, index) => (
                  <BookCard 
                    key={`fav-${book.key}-${index}`} 
                    book={book} 
                    onToggleFavorite={toggleFavorite}
                    onShowDetails={setSelectedBook}
                    isFavorite={isFavorite}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Search History Section */}
          <SearchHistory 
            searchHistory={searchHistory}
            onQuickSearch={quickSearch}
          />
        </div>

        {/* Modals */}
        {selectedBook === 'favorites' && (
          <FavoritesModal
            favorites={favorites}
            onClose={() => setSelectedBook(null)}
            onToggleFavorite={toggleFavorite}
            onShowDetails={setSelectedBook}
            isFavorite={isFavorite}
          />
        )}

        {selectedBook && selectedBook !== 'favorites' && (
          <BookDetailModal
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
            onQuickSearch={quickSearch}
          />
        )}
      </div>
    </DarkModeProvider>
  );
};

export default App;