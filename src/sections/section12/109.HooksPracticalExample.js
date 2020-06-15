import React, { useState, useEffect, useRef } from 'react';
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
        width: '20px',
        paddingLeft: '10px'
    }

    return (
        <header style={headerStyles}>
            <div >
                Hooks Practical Example
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const HooksPracticalExample = () => {

    const [name, setName] = useState('')
    const [products, setProducts] = useState([])

    const input = useRef()

    useEffect(() => {
        //debounce
        setTimeout(() => {

            if (name === input.current.value) {
                // HTTP Request
                fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
                    .then(result => result.json())
                    .then(data => setProducts(data.products))
            }
        }, 600)
    }, [name])

    const handleInput = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <Header />
            <input
                type='text'
                onChange={handleInput}
                ref={input}
            >
            </input>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HooksPracticalExample