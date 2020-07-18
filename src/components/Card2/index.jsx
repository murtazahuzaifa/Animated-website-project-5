import React from 'react';
import { arrowRight, textBold, handleAnimate, handlePauseAnimate } from '../../Animations';
import './style.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const cardFade = {
    autoPlay: false,
    keyframes: [
        { backgroundColor: 'rgba(60, 189, 248,0)', opacity: 0, },
        { backgroundColor: 'rgba(60, 189, 248,0.6)', opacity: 1, },
    ],
    timing: { duration: 400, easing: "ease-in-out", fill: "forwards", }
}

export default function ({ imgSrc }) {

    const cardFadeAnim = useWebAnimations(cardFade);
    const arrowRightAnim = useWebAnimations(arrowRight);
    const textBoldAnim = useWebAnimations(textBold);

    return (
        <div className='card2-container'>
            <div>
                <div
                    ref={cardFadeAnim.ref}
                    onMouseEnter={() => { handleAnimate(cardFadeAnim) }}
                    onMouseLeave={() => { handlePauseAnimate(cardFadeAnim) }}

                >
                    <button className='btn btn3'
                    style={{ width: '230px'}}
                        ref={textBoldAnim.ref}
                        onMouseEnter={() => { handleAnimate(textBoldAnim); handleAnimate(arrowRightAnim) }}
                        onMouseLeave={() => { handlePauseAnimate(textBoldAnim); handlePauseAnimate(arrowRightAnim) }}
                    >
                        View Case Study
                    <span ref={arrowRightAnim.ref} > ➔</span>
                    </button>
                </div>
            </div>
        </div>
    );
}