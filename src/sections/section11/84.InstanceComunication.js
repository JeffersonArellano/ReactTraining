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
                Comunication between components
        </div>
            <div style={subtitleStyles}>
                Instance methods
        </div>
            <span>
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' ></img>
            </span>
        </header>
    );

}

class ChildComponent extends Component {

    state = {
        message: '*****'
    }

    dispatchAlert = (e, message = 'Hello from Child component') => {
        alert(message);
        this.setState({ message })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.dispatchAlert}>
                    Child Component
          </button>
            </div>
        )
    }
}

class InstanceComunication extends Component {

    child = React.createRef()

    handleClick = () => {
        this.child.current.dispatchAlert(null, 'Hello from Root component');
    }

    render() {
        return (
            <div>
                <Header />
                <ChildComponent ref={this.child} />
                <button onClick={this.handleClick}>
                    Root Component
                </button>
            </div>
        )
    }
}

export default InstanceComunication