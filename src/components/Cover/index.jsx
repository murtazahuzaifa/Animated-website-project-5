import React from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';
import { buttonFill, handleAnimate, handleReverseAnimate, } from '../../Animations';
import './style.css';

export default function () {

    const buttonAnim1 = useWebAnimation(buttonFill);
    const buttonAnim2 = useWebAnimation(buttonFill);

    return (
        <div className='cover'>
            <div className='text-note1'>
                <h1>Your Welcome</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed cupiditate soluta
                    facilis nam aspernatur earum inventore expedita reprehenderit obcaecati et, aperiam ducimus,
                    quam consequatur consectetur sequi quos vero pariatur. Ab excepturi impedit reiciendis
                    voluptas at error totam tenetur corrupti ipsa natus, esse tempore, amet optio enim. Itaque,
                    at dignissimos.
                </p>
            </div>
            <div className='button-navigation'>
                <button
                    onMouseEnter={() => { handleAnimate(buttonAnim1) }}
                    onMouseLeave={() => { handleReverseAnimate(buttonAnim1) }}
                    ref={buttonAnim1.ref} className='btn btn2'>WORK WITH US</button>
                <button
                    onMouseEnter={() => { handleAnimate(buttonAnim2) }}
                    onMouseLeave={() => { handleReverseAnimate(buttonAnim2) }}
                    ref={buttonAnim2.ref} className='btn btn2'>VIEW OUR PROJECTS</button>
            </div>
        </div>
    );
}