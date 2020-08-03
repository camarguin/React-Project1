import React from 'react';

const Languages = () => {
    const languagesList = ['Portuguese', 'English'];

    return (
        <div>
            <ul>
                {languagesList.map((language, index) => (
                    <li key={index}>✓ {language}</li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;