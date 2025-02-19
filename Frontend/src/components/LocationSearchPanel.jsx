import React from 'react';

const LocationSearchPanel = ({ suggestions, onSuggestionClick }) => {
    return (
        <div className="p-4">
            {suggestions.length > 0 && (
                <ul className="bg-white shadow-md rounded-lg">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => onSuggestionClick(suggestion)}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationSearchPanel;