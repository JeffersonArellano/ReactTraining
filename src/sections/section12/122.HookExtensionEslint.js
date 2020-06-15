import React, { useState, useEffect } from 'react'
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
                React Personalized HTTP Hook
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' />
            </div>
        </header>
    );
}

const HookExtensionEslint = () => {

    const [clicks, setClicks] = useState(0)

    const add = () => setClicks(clicks + 1)

    useEffect(() => {
        console.log('useEffect')
    }, [])
    

    return (
        <div>
            <Header />

            <button onClick={add}>
                Clicks({clicks})
            </button>
        </div>
    )
}

export default HookExtensionEslint