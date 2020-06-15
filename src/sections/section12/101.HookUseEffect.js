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
                HOOK Use Effect
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' ></img>
            </div>
        </header>
    );
}

const HookUseEffect = () => {

    const [clicks, setClicks] = useState(0)

    useEffect(() => {

        //componentDidMount
        //componentDidUpdated
        console.log('inside useEffect', clicks)
        console.log('%c-----------------------', 'color:green')

        return () => {
            //componentWillUnmount
            console.log('Return useEffect', clicks)
        }
    })

    const add = () => setClicks(clicks + 1)

    return (
        <div>
            <Header />
            <button onClick={add}  >Clicks({clicks})</button>
        </div>
    )
}

export default HookUseEffect