import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
    return (
        <main>
            {posts.map(post => (
                <Article key={post.id} post={post} />
            ))}
        </main>
    );
};

const App = () => {
    // Define an array of post objects to be passed as props
    const posts = [
        { id: 1, title: 'Post 1', content: 'This is the content for Post 1.' },
        { id: 2, title: 'Post 2', content: 'This is the content for Post 2.' },
        { id: 3, title: 'Post 3', content: 'This is the content for Post 3.' }
    ];
    
    return (
        <div>
            {/* Render the ArticleList component and pass in the posts array as a prop */}
            <ArticleList posts={posts} />
        </div>
    );
};

export default ArticleList;