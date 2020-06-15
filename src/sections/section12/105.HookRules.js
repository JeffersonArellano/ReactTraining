import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import flameImg from './images/flame.png'

const Header = () => {

    const headerStyles = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px',
        fontWeight: 'bold',
        backgroundColor: 'blue',
        color: 'white'
    }

    const imageStyle = {
        height: '20px',
        width: '20px',
        paddingLeft: '10px'
    }

    return (
        <header style={headerStyles}>
            <div >
                HOOK Rules
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const HookRules = () => {

    //useEffect--> async,  is used just after render the DOM
    //useLayoutEffect--> sync, is executed before DOM update


    const [clicks, setClicks] = useState(0)

    const addNum = () => setClicks(clicks + 1)

    return (
        <div>
            <Header />
            <button onClick={addNum}>
                Clicks({clicks})
            </button>
        </div>
    )
}

export default HookRules