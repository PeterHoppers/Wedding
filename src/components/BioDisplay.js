import React, { useEffect, useState } from 'react';
import './BioDisplay.scss';

export const BioDisplay = (props) => {
    const [img, setImg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
        import(`../img/bios/${props.imgUrl}`).then(image => {
            setImg(image.default);
            setIsLoaded(true);
        }).catch(()=> {
            setIsErrored(true);
        })
    }, [props.imgUrl]);

    const getImgHolderClass = (peterSide) => {
        let classes = "bio-img-holder ";

        if (peterSide) {
            classes += "peter-side";
        } else {
            classes += "maddy-side";
        }

        return classes;
    }

    return (
        <>
            {isLoaded && !isErrored &&
                <div className="bio-display">
                    <div className={getImgHolderClass(props.peterSide)}>
                        <img src={img} alt={""}/>                        
                    </div>
                    <h2 className='bio-title'>{props.name}</h2>
                    {props.subtitle &&
                        <p className='bio-subtitle'>{props.subtitle}</p>
                    }                   
                    <p>{props.description}</p>
                </div>
            }
        </>
              
    )
    
}