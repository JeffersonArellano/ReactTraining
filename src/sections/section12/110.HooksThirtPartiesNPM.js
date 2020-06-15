import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce'
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
                Hooks Thirt Parties NPM
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const HooksThirtPartiesNPM = () => {

    const [name, setName] = useState('')
    const [search] = useDebounce(name, 1000)
    const [products, setProducts] = useState([])

    useEffect(() => {
        // HTTP Request
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
            .then(result => result.json())
            .then(data => setProducts(data.products))
    }, [search])

    const handleInput = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <Header />
            <input
                type='text'
                onChange={handleInput}
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

export default HooksThirtPartiesNPM