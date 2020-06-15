import React, { Component } from 'react';
import './App.css';
import flameImg from './images/flame.png'
import Pubsub from 'pubsub-js'

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
                Observer Pattern
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
                <Child2 />
            </div>
        )
    }
}

class Child2 extends Component {

    render() {
        return (
            <div style={boxStyles}>
                <Child3 />
            </div>
        )
    }
}

class Child3 extends Component {

    state = {
        message: '*****'
    }

    componentDidMount() {
        Pubsub.subscribe('rootEvent', (e, data) => {
            this.setState({
                message: data.title
            })
        })

    }

    componentWillUnmount() {
        Pubsub.unsubscribe('rootEvent')
    }


    handleClick = () => {
        Pubsub.publish('message', 'message from Child 3')
    }

    render() {
        return (
            <div style={boxStyles}>
                <p>{this.state.message}</p>
                <button onClick={this.handleClick}> Child3</button>
            </div>
        )
    }
}

class ObserverPattern extends Component {

    componentDidMount() {
        Pubsub.subscribe('message', (e, data) => {
            alert(data)
        })
    }

    handleClick = () => {
        Pubsub.publish('rootEvent', {
            title: 'Message from Root'
        })
    }

    render() {
        return (
            <div style={boxStyles}>
                <button onClick={this.handleClick} >
                    Root Button
                    </button>
                <Header />
                <Child />
            </div >
        )
    }
}


export default ObserverPattern