import React, { useEffect, useState } from 'react';
import useAnimation from '@wellyshen/use-web-animations';
import { arrowRight, textBold, cardAnimate, handleAnimate, handleReverseAnimate, handlePauseAnimate } from '../../Animations';
import './style.css';

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

const moveCardLeft = {
    autoPlay: false,
    keyframes: [
        { transform: 'translateX(0px)', opacity: 1 },
    ],
    timing: { duration: 500, easing: "ease-out", fill: "forwards" }
};

export default function ({ imgSrc, title, para }) {
    const cardAnim = useAnimation(cardAnimate);
    const arrowAnim = useAnimation(arrowRight);
    const readMoreBoldAnim = useAnimation(textBold);
    const cardMoveLeftAnim = useAnimation(moveCardLeft);
    const [cardMoveLeftAnimRef,] = useState({ ref: cardMoveLeftAnim.ref, animate: cardMoveLeftAnim.getAnimation });

    useEffect(() => {
        const handleScrollEvent = () => {
            if (isElementInViewport(cardMoveLeftAnimRef.ref.current)) {
                cardMoveLeftAnimRef.animate().play();
                window.removeEventListener('scroll', handleScrollEvent);
            }
        }
        window.addEventListener('scroll', handleScrollEvent);
    }, [cardMoveLeftAnimRef])

    return (
        <div className='card-container' ref={cardMoveLeftAnim.ref}>
            <div className='card' ref={cardAnim.ref}
                onMouseEnter={() => { handleAnimate(cardAnim) }}
                onMouseLeave={() => { handleReverseAnimate(cardAnim) }}
            >
                <div className='card-img'>
                    <img src={imgSrc} alt={title} />
                </div>
                <div className='card-text'>
                    <h2>{title}</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi deserunt
                        modi sed aliquid a. Doloremque accusamus non ea iste eos deleniti magnam
                        voluptate, reprehenderit harum reiciendis voluptatem officia voluptas repellat,
                        illum, ducimus cum ex inventore sunt dicta iure nisi amet?
                        Adipisci incidunt alias ipsa fugiat unde quidem dolor. Modi, animi?
                 </p>
                    <div
                        ref={readMoreBoldAnim.ref}
                        onMouseEnter={() => { handleAnimate(arrowAnim); handleAnimate(readMoreBoldAnim) }}
                        onMouseLeave={() => { handlePauseAnimate(arrowAnim); handleReverseAnimate(readMoreBoldAnim) }}
                    >Read more
                    <span ref={arrowAnim.ref} > ➔</span>
                    </div>
                </div>
            </div>
        </div>
    );
}