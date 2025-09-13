# 📚 BookFinder

> **Your comprehensive academic library companion** - Search millions of books by title, author, subject, or ISBN. Perfect for textbooks, research materials, and academic resources.

<img width="1008" height="929" alt="image" src="https://github.com/user-attachments/assets/39b41473-245f-4e83-b5b0-7026744eae7e" />

## ✨ Features

### 🔍 Smart Search
- **Multi-field search**: Title, Author, Subject, ISBN, or all fields
- **Advanced filters**: Publication year, language, free e-books only
- **Instant results**: Fast API integration with Open Library
- **Search history**: Track and revisit previous searches

### 💾 Personal Library Management
- **Favorites system**: Save books with one click
- **Persistent storage**: Your favorites are remembered
- **Quick access**: View all saved books in a dedicated modal
- **Smart organization**: Recently added favorites highlighted

### 🌙 Modern UI/UX
- **Dark/Light modes**: Toggle between themes with persistent preference
- **Responsive design**: Perfect on desktop, tablet, and mobile
- **Component-based**: Modular React architecture
- **Smooth animations**: Polished interactions and transitions

### 📖 Rich Book Information
- **Detailed view**: Comprehensive book information modal
- **Cover images**: High-quality book covers when available
- **Metadata**: Publication year, pages, language, ratings, ISBN
- **Subject tags**: Clickable tags for related searches
- **Direct links**: Access books on Open Library

### 🎓 Student-Focused
- **Academic subjects**: Quick access to popular study topics
- **Textbook search**: Find books by ISBN for course materials
- **Free resources**: Filter for freely available e-books
- **Research tools**: Perfect for academic research and study

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bookfinder.git
   cd bookfinder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application running.

### Building for Production

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **React Context** - Global state management for theme and user preferences

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful and consistent icons
- **CSS Variables** - Dynamic theming system

### Data & API
- **Open Library API** - Free access to millions of books
- **REST API integration** - Fetch with error handling
- **Local Storage** - Persist user preferences and favorites

### Development Tools
- **Create React App** - Zero-configuration setup
- **ES6+ JavaScript** - Modern JavaScript features
- **Component-based architecture** - Reusable and maintainable code

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── BookCard.jsx     # Individual book display
│   ├── BookDetailModal.jsx
│   ├── FavoritesModal.jsx
│   ├── Header.jsx       # App header with navigation
│   ├── SearchForm.jsx   # Search input and filters
│   ├── QuickSearch.jsx  # Recent and popular searches
│   └── WelcomeScreen/   # Homepage components
│       ├── HeroSection.jsx
│       ├── FeaturesGrid.jsx
│       ├── StudentBenefits.jsx
│       ├── StatsSection.jsx
│       └── CallToAction.jsx
├── context/
│   └── DarkModeContext.jsx # Theme management
├── hooks/
│   └── useDarkMode.js   # Custom theme hook
├── utils/
│   ├── api.js          # API integration functions
│   └── helpers.js      # Utility functions
└── App.js              # Main application component
```

## 🎯 Usage Guide

### Basic Search
1. Enter your search term in the main search bar
2. Select search type (Title, Author, Subject, ISBN, or All Fields)
3. Click "Search" or press Enter
4. Browse results in the responsive grid layout

### Advanced Filtering
1. Click the filter button next to the search bar
2. Set publication year, language preferences
3. Toggle "Free E-books Only" for open access books
4. Apply filters and search

### Managing Favorites
1. Click the heart icon on any book card to add/remove favorites
2. Access favorites via the header button
3. View all favorites in the dedicated modal
4. Remove favorites by clicking the heart again

### Theme Switching
1. Click the sun/moon icon in the header
2. Your preference is automatically saved
3. Theme applies across all components and modals

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=https://openlibrary.org
REACT_APP_COVERS_BASE_URL=https://covers.openlibrary.org
```

### Customization

#### Adding New Search Types
1. Update the `searchTypes` array in `SearchForm.jsx`
2. Add corresponding API logic in `utils/api.js`
3. Handle the new type in the search function

#### Custom Themes
1. Extend the Tailwind config with custom colors
2. Add new theme variants in `DarkModeContext.jsx`
3. Update component styles accordingly

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow React hooks patterns and functional components
- Use Tailwind CSS for styling consistency
- Ensure responsive design for all screen sizes
- Add proper error handling and loading states
- Write descriptive commit messages
- Test on both light and dark themes

## 📊 API Reference

### Open Library API

BookFinder uses the Open Library Search API:

**Base URL**: `https://openlibrary.org/search.json`

**Parameters**:
- `q`: General query
- `title`: Search by title
- `author`: Search by author
- `subject`: Search by subject
- `isbn`: Search by ISBN
- `limit`: Number of results (default: 24)
- `fields`: Specific fields to return

**Example Request**:
```
https://openlibrary.org/search.json?title=javascript&limit=10
```

### Rate Limiting
- No API key required
- Reasonable rate limits apply
- Implements client-side caching for better performance

## 🐛 Troubleshooting

### Common Issues

**Search not working**
- Check internet connection
- Verify API endpoints are accessible
- Clear browser cache and reload

**Favorites not saving**
- Ensure browser supports localStorage
- Check for browser storage quota limits
- Try in incognito mode to test

**Theme not persisting**
- Check localStorage permissions
- Verify browser supports localStorage
- Clear site data and retry

**Images not loading**
- Cover images depend on Open Library's CDN
- Some books may not have cover images
- Fallback book icon is displayed automatically

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Open Library** for providing free access to book data
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for beautiful icons
- **React community** for excellent documentation and tools

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/amanvatss/Aganitha-BookFinder/issues)
- **Discussions**: [GitHub Discussions](https://github.com/amanvatss/Aganitha-BookFinder/discussions)
- **Email**: your-email@example.com

## 🔮 Roadmap

- [ ] User accounts and cloud sync
- [ ] Reading lists and notes
- [ ] Book recommendations based on favorites
- [ ] Export functionality (PDF, Excel)
- [ ] Offline mode with cached results
- [ ] Integration with library systems
- [ ] Mobile app version
- [ ] Advanced search filters (publisher, genre, etc.)

---

**Made with ❤️ by [Aman vats](https://github.com/amanvatss)**

*Star ⭐ this repository if you find it helpful!*
