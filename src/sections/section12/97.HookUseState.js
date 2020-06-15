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
                HOOK useState
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

const HookUseState = () => {

    const [clicks, setClicks] = useState(0)
    return (
        <div>
            <Header />
            <button onClick={() => {
                setClicks(clicks + 1)
            }}>
                Clicks({clicks})
                </button>
        </div >
    )
}

/*class HookUseState extends Component {

    state = {
        clicks: 0
    }

    addClicks = () => {
        this.setState(state => ({
            clicks: state.clicks + 1
        }))
    }

    render() {
        const { clicks } = this.state
        return (
            
        )
    }
}*/

export default HookUseState