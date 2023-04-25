import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

const Article = ({ title, date, preview }) => {
    // Set default date if not provided
    const formattedDate = date || 'January 1, 1970';
    const posts = [
        { id: 1, title: 'Post 1', content: 'This is the content for Post 1.' },
        { id: 2, title: 'Post 2', content: 'This is the content for Post 2.' },
        { id: 3, title: 'Post 3', content: 'This is the content for Post 3.' }
    ];
    return (
        <article>
            <h3>{title}</h3>
            <small>{formattedDate}</small>
            <p>{preview}</p>
            <div>
                    {/* Render the ArticleList component and pass in the posts array as a prop */}
                    <ArticleList posts={posts} />
                </div>
        </article>
        );
};

export default Article;