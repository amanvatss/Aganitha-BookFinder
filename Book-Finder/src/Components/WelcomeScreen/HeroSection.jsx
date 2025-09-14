import React from 'react';
import { BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center py-16">
      <BookOpen className="w-24 h-24 text-blue-500 dark:text-blue-400 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to BookFinder! 📚
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
        Your comprehensive academic library companion. Search millions of books by title, author, 
        subject, or ISBN. Perfect for textbooks, research materials, and academic resources.
      </p>
    </div>
  );
};

export default HeroSection;