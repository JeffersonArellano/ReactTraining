import React, { Component } from 'react';
import './App.css';
import flameImg from './images/flame.png'
import Pubsub from 'pubsub-js'


const { Provider, Consumer } = React.createContext()

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
                (Whatever)
        </div>
            <div style={subtitleStyles}>
                React API Context
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

class Child extends Component {

    render() {
        return (
            <div style={boxStyles}>
                <p>Child</p>
                <Child2 />
            </div>
        )
    }
}

const Child2 = () => (
    <Consumer>
        {({ addClicks, clicks }) => {
            return (
                <div style={boxStyles}>
                    <p>Child2</p>
                    <button onClick={addClicks}>
                        Trigger ({clicks})
                            </button>
                </div>
            )
        }}
    </Consumer>
)

class ContextCommunication extends Component {

    state =
        {
            clicks: 0
        }

    addClicks = () => {
        this.setState(state => ({
            clicks: state.clicks + 1,
            addClicks: this.addClicks

        }))
    }


    render() {
        return (
            <Provider value={{
                clicks: this.state.clicks,
                addClicks: this.addClicks

            }}>
                <div style={boxStyles}>
                    <Header />
                    <Child />
                </div >
            </Provider>
        )
    }
}

export default ContextCommunication