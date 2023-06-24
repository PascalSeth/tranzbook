// src/components/BlogPage.js

import React from 'react';
import BlogCard from './BlogCard';
import './blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="header">
        <h1>Transportation Blog</h1>
      </div>
      <div className="content">
        <BlogCard
          title="Blog Post Title 1"
          author="Author 1"
          date="May 30, 2023"
          imageSrc="path/to/image1.jpg"
          content="Blog post content goes here..."
        />
        <BlogCard
          title="Blog Post Title 2"
          author="Author 2"
          date="May 28, 2023"
          imageSrc="path/to/image2.jpg"
          content="Blog post content goes here..."
        />
        {/* Add more BlogCard components for additional posts */}
      </div>
    </div>
  );
};

export default Blog;
