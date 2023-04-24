import React from "react";

const Article = ({ title, date, preview }) => {
    // Set default date if not provided
    const formattedDate = date || 'January 1, 1970';
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{formattedDate}</small>
            <p>{preview}</p>
        </article>
        );
};

export default Article;