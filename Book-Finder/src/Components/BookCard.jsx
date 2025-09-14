import React from 'react';
import { Book, Star, Heart, Download } from 'lucide-react';
import { getCoverUrl, formatAuthors, formatSubjects } from '../utilis/helpers';

const BookCard = ({ book, onToggleFavorite, onShowDetails, isFavorite }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
          {getCoverUrl(book) ? (
            <img
              src={getCoverUrl(book)}
              alt={book.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20" 
            style={{display: getCoverUrl(book) ? 'none' : 'flex'}}
          >
            <Book className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
        
        <button
          onClick={() => onToggleFavorite(book)}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-all duration-200 ${
            isFavorite(book)
              ? 'bg-red-500 text-white hover:bg-red-600 scale-110' 
              : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:scale-110'
          }`}
        >
          <Heart className="w-4 h-4" fill={isFavorite(book) ? 'currentColor' : 'none'} />
        </button>
        
        {book.has_fulltext && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
            Free
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 text-sm leading-tight">
          {book.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">
          by {formatAuthors(book.author_name)}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span>{book.first_publish_year || 'Unknown'}</span>
          {book.ratings_average && (
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
              <span>{book.ratings_average.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        {book.subject && (
          <div className="flex flex-wrap gap-1 mb-3">
            {formatSubjects(book.subject, 2).map((subject, index) => (
              <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-100 dark:border-blue-800">
                {subject}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-2">
          <button
            onClick={() => onShowDetails(book)}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors"
          >
            Details
          </button>
          {book.has_fulltext && (
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700 transition-colors"
            >
              <Download className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;