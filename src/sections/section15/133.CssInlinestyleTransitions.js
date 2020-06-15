import React, { useState } from 'react'
import flameImg from '../../images/flame.png'
import { ScaleLoader } from 'react-spinners'

const Header = ({ show }) => {

    const activeStyles = {
        backgroundColor: 'blue',
        transform: 'scale(1)'
    }

    let headerStyles = {
        backgroundColor: 'black',
        transform: 'scale(0)',
        position: 'absolute',
        textAligh: 'center',
        borderRadius: '.4em',
        color: '#FFF',
        padding: '0.5em',
        margin: '0.5em',
        fontSize: '14px',
        transition: 'all 800ms ease'
    }


    const imageStyle = {
        height: '20px',
        width: '20px',
        paddingLeft: '10px'
    }

    if (show) {
        headerStyles = {
            ...headerStyles,
            ...activeStyles
        }
    }

    return (
        <header style={headerStyles}>
            <h1 >
                Inline CSS Transitions
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </h1>
        </header>
    );
}

const CssInlinestyleTransitions = () => {

    const [active, setActive] = useState(false)

    const toggle = () => setActive(!active)

    return (
        <div>
            <button onClick={toggle}>
                {active ? 'Hide' : 'Show'}
            </button>
            <Header show={active} />
        </div>
    )
}

export default CssInlinestyleTransitions