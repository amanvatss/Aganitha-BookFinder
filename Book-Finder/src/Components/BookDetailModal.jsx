import React from 'react';
import { X, Star, ExternalLink, Download, Heart } from 'lucide-react';
import { getCoverUrl, formatAuthors } from '../utilis/helpers';

const BookDetailModal = ({ book, onClose, onToggleFavorite, isFavorite, onQuickSearch }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{book.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">by {formatAuthors(book.author_name)}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1">
              <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center">
                {getCoverUrl(book, 'L') ? (
                  <img
                    src={getCoverUrl(book, 'L')}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <Book className="w-20 h-20 text-gray-400 dark:text-gray-500" />
                )}
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Published:</span>
                  <p className="text-gray-900 dark:text-white">{book.first_publish_year || 'Unknown'}</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Pages:</span>
                  <p className="text-gray-900 dark:text-white">{book.number_of_pages_median || 'Unknown'}</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Language:</span>
                  <p className="text-gray-900 dark:text-white">{book.language ? book.language[0].toUpperCase() : 'Unknown'}</p>
                </div>
                {book.ratings_average && (
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Rating:</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-gray-900 dark:text-white">{book.ratings_average.toFixed(1)}</span>
                    </div>
                  </div>
                )}
              </div>
              
              {book.isbn && book.isbn.length > 0 && (
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="font-medium text-gray-700 dark:text-gray-300 block mb-1">ISBN:</span>
                  <p className="text-sm text-gray-900 dark:text-white font-mono">{book.isbn[0]}</p>
                </div>
              )}
            </div>
          </div>
          
          {book.subject && book.subject.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Subjects & Topics</h3>
              <div className="flex flex-wrap gap-2">
                {book.subject.slice(0, 15).map((subject, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onQuickSearch(subject, 'subject');
                      onClose();
                    }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {book.publisher && book.publisher.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Publishers</h3>
              <p className="text-gray-700 dark:text-gray-300">{book.publisher.slice(0, 5).join(', ')}</p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View on Open Library
            </a>
            
            {book.has_fulltext && (
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Read Free Online
              </a>
            )}
            
            <button
              onClick={() => onToggleFavorite(book)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isFavorite(book)
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <Heart className="w-4 h-4" fill={isFavorite(book) ? 'currentColor' : 'none'} />
              {isFavorite(book) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;