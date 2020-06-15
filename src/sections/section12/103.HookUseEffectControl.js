import React, { useState, useEffect } from 'react';
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
                HOOK Control Use Effect
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' ></img>
            </div>
        </header>
    );
}

const HookUseEffectControl = () => {

    const [num, setNum] = useState(0)
    const [emoji, setEmoji] = useState(':)')

    useEffect(() => {
        alert('Use effect control :D')
    }, [emoji, num])

    const addNum = () => setNum(num + 1)

    const toggleEmoji = () => {
        const nextEmoji = emoji === ':)' ? ':P' : ':)'
        setEmoji(nextEmoji)
    }

    return (
        <div>
            <Header />
            <button onClick={addNum}>
                Clicks({num})
            </button>

            <h1>{emoji}</h1>
            <button onClick={toggleEmoji}>
                Change Emoji
            </button>
        </div>
    )
}

export default HookUseEffectControl