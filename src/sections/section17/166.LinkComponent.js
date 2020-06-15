import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const HelloComponent = () => (
    <h1>Hello</h1>
)

const Products = () => (
    <h1>Products</h1>
)

const HomeComponent = (props) => {

    console.log(props)
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.name}</h1>
        </div>
    )
}

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
}

const Navegation = () => (
    <nav style={navStyles}>
        <Link to={{
            pathname: '/',
            search: '?order=name',
            hash: '#hash-other',
            state: {
                name: 'Text state',
                age: 32
            }

        }}>Home</Link>
        <Link to='/hello'>Hello</Link>
        <Link to='/products' replace>Products</Link>
    </nav>
)

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Navegation />
            <Route path='/' exact component={HomeComponent} />
            <Route path='/hello' render={HelloComponent} />
            <Route path='/products' render={Products} />
        </BrowserRouter>
    )
}

export default DefaultComponent;




