import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce'
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
                Hook Use Imperative Handle
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

// React.forwardRef()
// Execute instance methods

const FancyInput = forwardRef((props, ref) => {

    const [text, setText] = useState('***')
    const inputText = useRef()

    useImperativeHandle(ref, () => ({
        dispatchAlert: () => {
            alert('Hi')
        },
        setParragraph: (message) => {
            setText(message)
        },
        focusInput: () => {
            inputText.current.focus()
        }

    }))

    return (
        <div>
            <p>{text}</p>
            <input type='text' ref={inputText}>
            </input>
        </div >
    )
})

const HookUseImperativeHandle = () => {

    const fancyInput = useRef()

    const handleClick = () => {
        fancyInput.current.focusInput()
    }

    return (
        <div>
            <Header />
            <FancyInput ref={fancyInput} />
            <button onClick={handleClick}>
                Dispatch
            </button>
        </div>
    )
}

export default HookUseImperativeHandle