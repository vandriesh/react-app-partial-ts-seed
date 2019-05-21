import React from 'react';
import './Map.css';

const Map = ({
    imagename,
    location
}) => {
    return (
        <div className="MapBox">
            <img src={`images/${imagename}`} alt={location} />
        </div>
    );
};

export default Map;
