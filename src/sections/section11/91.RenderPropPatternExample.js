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
                (Root - Child)
        </div>
            <div style={subtitleStyles}>
                Render Props Example
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

class Resize extends Component {

    static propTypes = {
        render: propTypes.func.isRequired
    }

    state = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {

        const { width, height } = this.state
        const { render } = this.props

        return (
            render({ width, height })
        )
    }
}


class RenderPropPatternExample extends Component {

    render() {
        return (
            <div style={boxStyles}>
                <Header />
                <Resize render={({ width, height }) => {
                    return (
                        <div>
                            <h1>width: {width}</h1>
                            <li>{height}</li>
                        </div>
                    )
                }} />
            </div >
        )
    }
}

export default RenderPropPatternExample