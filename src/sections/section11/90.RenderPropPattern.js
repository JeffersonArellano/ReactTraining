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
                (Root - Child)
        </div>
            <div style={subtitleStyles}>
                Render Props
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

class List extends Component {

    render() {
        const { list, render } = this.props
        return (
            <div>
                {list.map((item, index) => {

                    if (render) {
                        return render(item, index)
                    }

                    return (
                        <li key={item.Name}>
                            {item.Name}
                        </li>
                    )
                })}
            </div>
        )
    }
}


class RenderPropPattern extends Component {
    state = {
        fruits: [
            { Name: 'Strawberry', price: 22 },
            { Name: 'Pinneapple', price: 18 },
            { Name: 'Mango', price: 10 },
            { Name: 'Apple', price: 15 },
            { Name: 'Orange', price: 9 },
        ]
    }

    render() {
        const { fruits } = this.state
        return (
            <div style={boxStyles}>
                <Header />
                <List list={fruits}
                    render={(data, index) => (
                        <div>
                            {data.Name} - ${data.price}
                        </div>
                    )} />
            </div >
        )
    }
}

export default RenderPropPattern