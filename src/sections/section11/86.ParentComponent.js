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
                (Childs)
        </div>
            <div style={subtitleStyles}>
                Parent component
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

const blueStyle = {
    ...boxStyles,
    border: '1px solid blue',
}

const redStyles = {
    ...boxStyles,
    border: '1px solid red',
}
class ComponentA extends Component {
    render() {
        const { num } = this.props

        return (
            <div style={blueStyle}>
                <button onClick={this.props.onAdd}>
                    component A ({num})
               </button>
            </div>
        )
    }
}

class ComponentB extends Component {
    render() {
        const { num } = this.props

        return (
            <div style={redStyles}>
                <button onClick={this.props.onAdd}>
                    component B ({num})
               </button>
            </div>
        )
    }
}

class Parentcomponent extends Component {

    state = {
        countA: 0,
        countB: 0
    }

    handleAddA = () => {
        this.setState(state => ({
            countA: state.countA + 1
        }))
    }

    handleAddB = () => {
        this.setState(state => ({
            countB: state.countB + 2
        }))
    }

    render() {
        const { countA, countB } = this.state
        return (
            <div style={boxStyles}>
                <Header />
                <ComponentA num={countA} onAdd={this.handleAddB} />
                <ComponentB num={countB} onAdd={this.handleAddA} />
            </div>
        )
    }
}

export default Parentcomponent;