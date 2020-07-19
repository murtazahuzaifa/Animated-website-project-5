import React, { useState, useEffect } from 'react';
import useWebAnimation from '@wellyshen/use-web-animations';
import {navLink_underline, navlink_hover, buttonFill, handleAnimate, handleReverseAnimate } from '../../Animations';

import './style.css';

export default function () {

    const [linkNames,] = useState({
        "HOME": { name: "HOME", acitve: true, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) },
        "ABOUT": { name: "ABOUT", acitve: false, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) },
        "SERVICES": { name: "SERVICES", acitve: false, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) },
        "CONTACTUS": { name: "CONTACTUS", acitve: false, navHover: useWebAnimation(navlink_hover), navSelect: useWebAnimation(navLink_underline) }
    });
    const [linkState, setLinkState] = useState(linkNames.HOME.name);
    const buttonHover = useWebAnimation(buttonFill);
    const [navSrollDown, setNavScrollDown] = useState(false);

    const handleLinkOnChange = (value) => {
        handleReverseAnimate(linkNames[linkState].navSelect);
        setLinkState(value);
        handleAnimate(linkNames[value].navSelect);
    }
    const handleOnScroll = (scrollY)=>{
        if(scrollY > 18){
            setNavScrollDown(true);
        }else{
            setNavScrollDown(false);
       }}

    useEffect(() => {

        handleAnimate(linkNames[linkState].navSelect);
        window.addEventListener('scroll', () => {
            handleOnScroll(window.scrollY)
        })
    }, [linkState, linkNames]);

    return (
        <div className={`nav-bar ${navSrollDown? 'nav-bar-down':''}`}>
            <span><img src={require('../../images/logo.png')} style={{width:'70px'}} alt="logo"/></span>
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
                className='btn btn1'
                ref={buttonHover.ref}
                onMouseEnter={() => { handleAnimate(buttonHover) }}
                onMouseLeave={() => { handleReverseAnimate(buttonHover) }}
            >
                <span>✉</span> <span>GET IN TOUCH</span>
            </button>
        </div>
    );
}