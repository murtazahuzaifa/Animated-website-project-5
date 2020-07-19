import React, {useState, useEffect} from 'react';
import { arrowRight, textBold, handleAnimate, handlePauseAnimate } from '../../Animations';
import './style.css';
import useWebAnimations from '@wellyshen/use-web-animations';

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

const fadeIn = {
    autoPlay: true,
    keyframes: [
        { opacity: 0, },
        // { opacity: 1, },
    ],
    timing: { duration: 1000, easing: "ease-in-out", fill: "forwards", }
}

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
    const cardFadeInAnim = useWebAnimations(fadeIn);
    const [ cardFadeInAnimState,] = useState({ ref: cardFadeInAnim.ref, animate: cardFadeInAnim.getAnimation });

    useEffect(() => {
        const handleScrollEvent = () => {
            if (isElementInViewport(cardFadeInAnimState.ref.current)) {
                cardFadeInAnimState.animate().reverse();
                cardFadeInAnimState.animate().play();
                window.removeEventListener('scroll', handleScrollEvent);
            }
        }
        window.addEventListener('scroll', handleScrollEvent);
    }, [cardFadeInAnimState])

    return (
        <div className='card2-container' ref={cardFadeInAnim.ref}>
            <div style={{ background: `url(${imgSrc})`, justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <div
                    ref={cardFadeAnim.ref}
                    onMouseEnter={() => { handleAnimate(cardFadeAnim) }}
                    onMouseLeave={() => { handlePauseAnimate(cardFadeAnim) }}
                >
                    <button className='btn btn3'
                        style={{ width: '230px' }}
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