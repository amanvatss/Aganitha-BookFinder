// Utility functions

export const getCoverUrl = (book, size = 'M') => {
  if (book.cover_i) {
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-${size}.jpg`;
  }
  return null;
};

export const formatAuthors = (authors) => {
  if (!authors) return 'Unknown Author';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return authors.join(' & ');
  return authors.slice(0, 2).join(', ') + ' et al.';
};

export const formatSubjects = (subjects, limit = 3) => {
  if (!subjects || subjects.length === 0) return [];
  return subjects
    .filter(subject => subject.length < 30)
    .slice(0, limit);
};

export const createSearchHistoryEntry = (query, type, results) => {
  return {
    query,
    type,
    timestamp: Date.now(),
    results
  };
};

// Popular search suggestions for college students
export const POPULAR_SEARCHES = [
  'psychology', 'computer science', 'mathematics', 'physics', 'chemistry',
  'literature', 'philosophy', 'economics', 'biology', 'history',
  'statistics', 'calculus', 'programming', 'data structures', 'algorithms'
];