import React from 'react';
import { X, Heart } from 'lucide-react';
import BookCard from './BookCard';

const FavoritesModal = ({ favorites, onClose, onToggleFavorite, onShowDetails, isFavorite }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
              Your Favorite Books ({favorites.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No favorites yet</h3>
              <p className="text-gray-600 dark:text-gray-400">Start adding books to your favorites to see them here!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((book, index) => (
                <BookCard 
                  key={`modal-fav-${book.key}-${index}`} 
                  book={book} 
                  onToggleFavorite={onToggleFavorite}
                  onShowDetails={onShowDetails}
                  isFavorite={isFavorite}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;