import React from "react";

const About = ({ imageSrc, aboutText }) => {
    // Set default image source if not provided
    const imgSrc = imageSrc || 'https://via.placeholder.com/215';

    return (
        <aside>
            <img src={imgSrc} alt="blog logo" />
            <p>{aboutText}</p>
        </aside>
    );
};

export default About