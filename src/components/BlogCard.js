// src/components/BlogCard.js

import React from 'react';
import './blogcard.css';

const BlogCard = ({ title, author, date, imageSrc, content }) => {
  return (
    <div className="blog-card">
      <img src={imageSrc} alt="Blog Post" />
      <div className="card-content">
        <h2>{title}</h2>
        <p className="author">{author}</p>
        <p className="date">{date}</p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
