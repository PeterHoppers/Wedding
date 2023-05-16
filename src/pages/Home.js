import coupleImg from "../img/landing-photo.jpg";

import React, { useState } from 'react';

export const Home = (props) => {
    const [isLoaded, setLoading] = useState(false);

    const imgLoaderDetect = () => {
        setLoading(true);
    }
    return (
        <>
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
            <main>
                <div className ="home-summary">
                    <h2>Itinerary</h2>
                    <div className="home-summary-description">
                        <h3>Ceremony starts at 1:00 pm</h3>
                        <a href="https://www.google.com/maps/place/Paradise+Park+Weddings/@43.0174442,-89.2048897,15z/data=!4m2!3m1!1s0x0:0xab67265d96696827?sa=X&ved=2ahUKEwjdwoTs6Pj-AhXRk4kEHfF0D4MQ_BJ6BAh2EAg" target="_blank" rel="noreferrer">
                            <span>Paradise Park</span><br/>
                            <span>3109 Oak Street</span><br/>
                            <span>Cottage Grove, Wisconsin</span><br/>
                        </a>
                    </div>
                    <div className="home-summary-description">
                        <h3>Reception to follow</h3>
                        <a href="https://www.google.com/maps/place/Hilton+Garden+Inn+Sun+Prairie+Madison/@43.165375,-89.2751648,17z/data=!3m1!4b1!4m9!3m8!1s0x880657dc64d7ec8d:0xc12b8158639abe07!5m2!4m1!1i2!8m2!3d43.1653751!4d-89.2702939!16s%2Fg%2F11gcfww4s4" target="_blank" rel="noreferrer">
                            <span>Hilton Garden Inn</span><br/>
                            <span>1220 South Grand Avenue</span><br/>
                            <span>Sun Prairie, Wisconsin</span><br/>
                        </a>
                    </div> 
                </div>
            </main>
        </>
        
    );
}