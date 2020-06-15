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
                (Root *--* Child)
        </div>
            <div style={subtitleStyles}>
                HOC High Order Component
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

const withSize = (Comp) => class extends Component {

    state = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.resize)
    }

    resize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {
        const { width, height } = this.state
        return (
            <Comp width={width}
                height={height} />
        )
    }
}



class HOCSizeComponent extends Component {
    render() {
        const { width, height } = this.props

        return (
            <div style={boxStyles}>
                <Header />
                <div>
                    width: {width} -
                    height : {height}
                </div>
            </div >
        )
    }
}

export default withSize(HOCSizeComponent)

