import React from "react";

function BlogContent(props) {
    return <div>{props.articleText}</div>;
}

function Header() {
    return (
        <header>
            <BlogContent articleText="Overreacted" />
        </header>
        );
}

export default Header;