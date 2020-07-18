import React, { useEffect, useState, } from 'react';
import useAnimation from '@wellyshen/use-web-animations';
import { textBold ,handleAnimate, handleReverseAnimate, handlePauseAnimate } from '../../Animations';
import './style.css';

const headTilting = {
    autoPlay: true,
    keyframes:[
        {transform: "translate( -120px,105px)"},
        {transform: "translate( -110px,105px) rotateZ(9deg)"},
    ],
    timing:{ duration:500, direction:'alternate', iterations:Infinity }
};

export default function () {

    const headAnim = useAnimation(headTilting);

    return (
        <div className='contact-us-container'>
            <div className='charater'>
                <div ref={headAnim.ref} className="charater-head"></div>
                <div className="charater-body"></div>
            </div>

            <div>
                <h1 style={{ marginBottom: '0' }} >Contact @</h1>
                <hr style={{ padding: '1px', backgroundColor: 'black', margin: '20px 0' }} />
                <h3>Murtaza</h3>
                <h3>+923360031756</h3>
            </div>
        </div>
    )
}