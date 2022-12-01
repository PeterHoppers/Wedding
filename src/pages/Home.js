import coupleImg from "../img/landing-photo.jpg";

import React, { useState } from 'react';

export const Home = (props) => {
    const [isLoaded, setLoading] = useState(false);

    const imgLoaderDetect = () => {
        setLoading(true);
    }
    return (
        <div className="img-display-holder">
            <img 
                className="img-text-display" 
                src={coupleImg} 
                alt="Couple in front of heart"
                onLoad={imgLoaderDetect}
            />
            {isLoaded && /* Keeps the text from loading in before the picture */
                <div className="img-text-holder">
                    <h1>Madelyn + Peter</h1>
                    <span>June 24th, 2023 | Sun Prairie, WI</span>
                </div>
            }            
        </div>
    );
}