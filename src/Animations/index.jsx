export const navLink_underline = {
    autoPlay: false,
    keyframes: [
        { opacity: 0 },
        { background: 'rgb(6, 92, 92)', width: '0', height: '3px', },
        { background: 'rgb(6, 92, 92)', width: '100%', height: '3px', },
    ],
    timing: { duration: 250, easing: "ease-in-out", fill: "forwards" }
};

export const navlink_hover = {
    autoPlay: false,
    keyframes: [
        { transform: 'scale(1)', },
        { transform: 'scale(1.1)', fontWeight: 'bold' },
    ],
    timing: { duration: 250, easing: "ease-in-out", fill: "forwards" }
};

export const buttonFill = {
    autoPlay: false,
    keyframes: [
        ...Array(35).fill().map((_, i) => ({ background: `linear-gradient(110deg, rgb(6, 120, 126) ${i*2}%, rgba(0,0,0,0) 0%)`, }))
    ],
    timing: { duration: 250, easing: "ease-in-out", fill: "forwards", },
};

export const arrowRight = {
    autoPlay: false,
    keyframes: [
        { marginLeft: '0px' }, { marginLeft: '20px' },
    ],
    timing: { duration: 500, easing: "ease-in-out", fill: "forwards", iterations:Infinity, direction:'alternate'  }
}

export const textBold = {
    autoPlay: false,
    keyframes: [ { fontWeight: 'normal' }, { fontWeight: 'bold' },
    ],
    timing: { duration: 200, easing: "ease-out", fill: "forwards" }
}

export const cardAnimate = {
    autoPlay: false,
    keyframes: [
        { boxShadow: '-5px -5px 10px 2px gray', transform: 'rotateX(20deg) rotateY(10deg)' },
        { boxShadow: '5px 5px 10px 2px gray', transform: 'rotateX(0deg) rotateY(0deg)' },
    ],
    timing: { duration: 350, easing: "ease-out", fill: "forwards" }
};

export const handleAnimate = (elem) => { elem.getAnimation().updatePlaybackRate(1); elem.getAnimation().play() };
export const handleReverseAnimate = (elem) => { elem.getAnimation().updatePlaybackRate(-1); elem.getAnimation().play() };
export const handlePauseAnimate = (elem) => { elem.getAnimation().currentTime=0; elem.getAnimation().pause() };
