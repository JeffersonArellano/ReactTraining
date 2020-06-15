import React, { Component } from 'react';
import './App.css';
import flameImg from './images/flame.png'


const Header = () => {

    const subtitleStyles = {
        fontWeight: 'bold'
    }

    const headerStyles = {
        margin: '0.6em',
        borderRadius: '0.3em',
        border: '1px solid #d2d2d2',
        padding: '2em 0.4em',
        fontFamily: 'monospace',
        fontSize: '17px'
    }

    const imageStyle = {

        height: '20px',
        width: '20px'

    }

    return (
        <header style={headerStyles}>
            <div>
                (Child and Root)
        </div>
            <div style={subtitleStyles}>
                Event Bubbling
        </div>
            <span>
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' ></img>
            </span>
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

class ChildBubbling extends Component {

    handleClick = (e) => {
        e.stopPropagation()
        console.log('click on child bubbling component');
    }

    render() {
        return (
            <div style={boxStyles}
                onClick={this.handleClick}
            >
                <p>Child Bubbling</p>
            </div>
        )
    }
}

class Bubbling extends Component {

    handleClick = () => {
        console.log('click on root bubbling component');
    }

    render() {
        return (
            <div style={boxStyles}
                onClick={this.handleClick}
            >
                <Header />
                <ChildBubbling />
            </div >
        )
    }
}

export default Bubbling