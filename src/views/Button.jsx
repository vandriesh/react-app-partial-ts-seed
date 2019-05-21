import React from 'react';
import './Button.css';

const Button = ({
    location,
    onClickEvent
}) => {
    return (
        <button className="location-button" onClick={onClickEvent}>
            {location}
        </button>
    );
};

export default Button;
