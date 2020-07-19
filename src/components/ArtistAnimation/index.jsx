import React from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';

import './style.css';

const style = {
    artist:{
        width: '280px',
        height: '300px',
        // padding:'100px',
        overflow: 'hidden',
        // backgroundColor: 'purple',
    },
    painting: {
        background: `url(${require('../../images/artist/painting.svg')})`,
        backgroundPostion: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200px',
        paddingBottom: '200px',
        // backgroundColor: 'red',
        transform: 'translate(0px, 0px)',
    },
    arm:{
        background: `url(${require('../../images/artist/arm.svg')})`,
        backgroundPostion: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60px',
        paddingBottom: '50px',
        // backgroundColor: 'blue',
        transform: 'translate(75px, -415px)',
        // transform: 'translate(60px, -375px) rotateZ(30deg)',
    },
    body:{
        background: `url(${require('../../images/artist/body.svg')})`,
        backgroundPostion: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '80px',
        paddingBottom: '315px',
        // backgroundColor: 'green',
        transform: 'translate(120px, -150px)',
    },
}

const armAnimation={
    autoPlay: true,
    keyframes:[
         {transform: 'translate(75px, -415px)',},
         {transform: 'translate(60px, -375px) rotateZ(30deg)'},
    ],
    timing:{ duration:500, iterations:Infinity, direction:'alternate'}
}

export default function () {

    const armAnim = useWebAnimation(armAnimation);

    return (
        <div className='artist' style={style.artist}>
            <div className='painting' style={style.painting} ></div>
            <div className='body' style={style.body} ></div>
            <div ref={armAnim.ref} className='arm' style={style.arm} ></div>
        </div>
    )
}