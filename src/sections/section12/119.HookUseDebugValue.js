import React, { useState, useEffect, useDebugValue } from 'react'
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
                React Personalized Hook
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' />
            </div>
        </header>
    );
}

const useSizes = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useDebugValue('First Hook')



    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return {
        width,
        height
    }
}

const HookPersonalized = () => {

    const { height, width } = useSizes()

    return (
        <div>
            <Header />
            <h1>Height : {height} Width:{width}</h1>
        </div>
    )
}

export default HookPersonalized