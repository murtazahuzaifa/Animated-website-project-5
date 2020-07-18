import React from 'react';
import { NavBar, Cover, Card1, Card2, ContactUs } from '../components';

import './style.css';

export default function () {

    return (
        <>
            <div className='animation-page-container' >
                <div id='header' ><NavBar /></div>
                <div><br /><br /><br /><br /></div>
                <div ><Cover /></div>
                <div >
                    <Card1 imgSrc={require('../images/cardImage.png')} title={"We Design And Develope"} />
                    <Card1 imgSrc={require('../images/cardImage.png')} title={"Custom Solution"} />
                    {/* <div><Card1 imgSrc={require('../images/cardImage.png')} title={"Video Animation ADS"} /></div> */}
                    <Card1 imgSrc={require('../images/cardImage.png')} title={"Digital Marketing"} />
                    <Card1 imgSrc={require('../images/cardImage.png')} title={"Design And UI/UX"} />
                </div>
                <div className='portfolio'>
                    <div>
                        <h2>Our Portfolio</h2>
                        <p>User-friendly web pages are our thing. We’ve also helped some awesome businesses with branding and custom solutions.</p>
                    </div>
                    <div><Card2 imgSrc={'../images/case-study.png'} /></div>
                </div>
                <div><ContactUs/></div>
            ANIMATION Page
            <h1>Heading</h1>
            </div>
        </>
    );
}