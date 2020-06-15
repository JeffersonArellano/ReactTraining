import React, { Component, useState } from 'react';
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
        width: '20px'
    }

    return (
        <header style={headerStyles}>
            <div >
                HOOK Use State Booleans
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' ></img>
            </div>
        </header>
    );
}

const boxStyles = {

    padding: '0.5em',
    margin: '0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAling: 'center'
}

const HookUseStateBooleans = () => {

    const [isActive, setActive] = useState(false);

    const toggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            {isActive && <Header />}
            <button onClick={toggle} >
                {isActive ? 'Deactive' : 'Active'}
            </button>
        </div >
    )
}


export default HookUseStateBooleans