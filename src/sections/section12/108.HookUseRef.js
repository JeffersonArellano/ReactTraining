import React, { useRef } from 'react';
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
                HOOK Use Ref
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const HookUseRef = () => {

    const input = useRef()

    const focus = () => input.current.focus()
    const blur = () => input.current.blur()

    return (
        <div>
            <Header />
            <input
                type='text'
                placeholder='input some text'
                ref={input}
            />
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={blur}>
                Blur
            </button>
        </div>
    )
}

export default HookUseRef