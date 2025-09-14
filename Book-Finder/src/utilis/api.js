// API integration functions for book search
export const searchBooksApi = async (query, type = 'title', filters = {}) => {
  if (!query.trim()) return null;
  
  try {
    let url = 'https://openlibrary.org/search.json?';
    
    // Build search URL based on search type
    switch (type) {
      case 'title':
        url += `title=${encodeURIComponent(query)}`;
        break;
      case 'author':
        url += `author=${encodeURIComponent(query)}`;
        break;
      case 'subject':
        url += `subject=${encodeURIComponent(query)}`;
        break;
      case 'isbn':
        url += `isbn=${encodeURIComponent(query)}`;
        break;
      default:
        url += `q=${encodeURIComponent(query)}`;
    }
    
    // Add filters to URL
    if (filters.publishYear) {
      url += `&first_publish_year=${filters.publishYear}`;
    }
    if (filters.language) {
      url += `&language=${filters.language}`;
    }
    if (filters.hasEbook) {
      url += `&has_fulltext=true`;
    }
    
    url += '&limit=24&fields=key,title,author_name,first_publish_year,isbn,publisher,subject,language,number_of_pages_median,ratings_average,cover_i,has_fulltext';
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs || [];
  } catch (err) {
    console.error('Search error:', err);
    throw err;
  }
};