import React, { useState, useEffect } from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';

import './style.css';

const navLink_underline = {
    autoPlay: false,
    keyframes: [
        { opacity: 0 },
        { background: 'rgb(6, 92, 92)', width: '0', height: '3px', },
        { background: 'rgb(6, 92, 92)', width: '100%', height: '3px', },
    ],
    timing: { duration: 250, easing: "ease-in-out", fill: "forwards" }
};

const navlink_hover = {
    autoPlay: false,
    keyframes: [
        { transform: 'scale(1)', },
        { transform: 'scale(1.1)', fontWeight: 'bold' },
    ],
    timing: { duration: 250, easing: "ease-in-out", fill: "forwards" }
};

const buttonHoverTimeFrame = {
    autoPlay: false,
    keyframes: [
        ...Array(100).fill().map((_,i)=>( { background: `linear-gradient(110deg, rgb(6, 120, 126) ${i}%, rgba(0,0,0,0) 0%)`,} ))
    ],
    timing: { duration: 300, easing: "ease-in-out", fill: "forwards", },
};

export default function () {

    const [linkNames,] = useState({
        "HOME": { name: "HOME", acitve: true, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) },
        "ABOUT": { name: "ABOUT", acitve: false, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) },
        "SERVICES": { name: "SERVICES", acitve: false, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) },
        "CONTACTUS": { name: "CONTACTUS", acitve: false, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) }
    });
    const [linkState, setLinkState] = useState(linkNames.HOME.name);
    const buttonHover = useWebAnimation(buttonHoverTimeFrame);

    const handleAnimate = (navSelect) => { navSelect.getAnimation().updatePlaybackRate(1); navSelect.getAnimation().play() };
    const handleReverseAnimate = (navSelect) => { navSelect.getAnimation().updatePlaybackRate(-1); navSelect.getAnimation().play() };

    const handleLinkOnChange = (value) => {
        handleReverseAnimate(linkNames[linkState].navSelect);
        setLinkState(value);
        handleAnimate(linkNames[value].navSelect);
    }

    useEffect(() => {
        handleAnimate(linkNames[linkState].navSelect);
    }, [linkState, linkNames]);

    return (
        <div className='nav-bar'>
            <span><h1>LOGO</h1></span>
            <ul>
                {Object.values(linkNames).map((link, id) => {
                    const navSelect = link.navSelect;
                    const navHover = link.navHover;
                    return (
                        <li key={id}
                            onMouseEnter={() => { navHover.getAnimation().updatePlaybackRate(1); navHover.getAnimation().play() }}
                            onMouseLeave={() => { navHover.getAnimation().updatePlaybackRate(-1); navHover.getAnimation().play() }}
                        >
                            <label htmlFor={link.name.toLocaleLowerCase()} ref={navHover.ref} >
                                <input id={link.name.toLocaleLowerCase()}
                                    type="radio"
                                    value={link.name}
                                    name={'link'}
                                    checked={linkState === link.name ? true : false}
                                    onChange={(e) => { handleLinkOnChange(e.target.value) }}
                                />
                                {link.name}
                            </label>
                            <span ref={navSelect.ref} />
                        </li>
                    )
                })}
            </ul>
            <button
                ref = {buttonHover.ref}
                onMouseEnter={() => { handleAnimate(buttonHover) }}
                onMouseLeave={() => { handleReverseAnimate(buttonHover) }}
            >
                <span>✉</span> <span>GET IN TOUCH</span>
            </button>
        </div>
    );
}