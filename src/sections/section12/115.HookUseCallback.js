import React, { useState, useCallback } from 'react';
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
                React use callback
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const getRandonColor = () =>
    '#' + Math.random().toString(16).slice(2, 8)

const Button = React.memo(({ callback, children }) => {

    const styles = {
        padding: '1em',
        fontSize: '20px',
        backgroundColor: getRandonColor()
    }

    return (
        <button style={styles}
            onClick={callback}>
            {children}
        </button>
    )
})


const HookUseCallback = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const incrementA = useCallback(() => {
        setA(a => a + 1)
    }, [])

    const incrementB = useCallback(() => {
        setB(b => b + a)
    }, [a])


    return (
        <div>
            <Header />
            <Button callback={incrementA} >
                Increment A
            </Button>
            <Button callback={incrementB}>
                incrementB
            </Button>
            <h1>a: {a} b:{b}</h1>
        </div>
    )
}

export default HookUseCallback