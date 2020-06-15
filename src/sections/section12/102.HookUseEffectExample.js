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
        width: '20px',
        paddingLeft: '10px'
    }

    return (
        <header style={headerStyles}>
            <div >
                HOOK Use Effect Example
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' ></img>
            </div>
        </header>
    );
}

const HookUseEffectExample = () => {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMove = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    })
    return (
        <div>
            <Header />
            <h1>X : {mouseX} Y: {mouseY}</h1>
        </div>
    )
}

export default HookUseEffectExample