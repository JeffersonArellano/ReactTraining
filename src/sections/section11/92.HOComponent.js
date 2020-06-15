import React, { Component } from 'react';
import './App.css';
import flameImg from './images/flame.png'
import propTypes from 'prop-types'

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
                (Root *--* Child)
        </div>
            <div style={subtitleStyles}>
                High Order Component
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

const withCounter = (Comp) => {
    return (config) => class extends Component {
        state = {
            cont: config.clicks
        }

        add = () => {
            this.setState(state => ({
                cont: state.cont + config.sumClicks
            }))
        }

        render() {
            return (
                <Comp cont={this.state.cont}
                    add={this.add}
                />
            )
        }
    }
}

class HOComponent extends Component {
    render() {

        const { cont, add } = this.props

        console.log(this.props)
        return (
            <div style={boxStyles}>
                <Header />
                <h1>{cont}</h1>
                <button onClick={add} >
                    Add
                </button>

            </div >
        )
    }
}

export default withCounter(HOComponent)({
    clicks: 10,
    sumClicks: 3
})