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
                HOOK Use State Objects
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

const HookUseStateObjects = () => {

    const [clicks, setClicks] = useState(0)
    const [title, setTitle] = useState('')


    const addClicks = () => {
        setClicks(clicks + 1)
    }

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <Header />
            <input type="text"
                value={title}
                onChange={handleInput}>
            </input>
            <button onClick={addClicks}>
                Clicks({clicks})
            </button>
            <h3>{title}</h3>
        </div >
    )
}

export default HookUseStateObjects