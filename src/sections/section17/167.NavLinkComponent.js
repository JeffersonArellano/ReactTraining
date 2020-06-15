import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import '../../components/NavLinkStyle.css'

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

const NavActive = {
    color: 'orangered'
}

const Navegation = () => (
    <nav style={navStyles}>
        <NavLink
            to='/'
            exact
            activeStyle={NavActive}>Home</NavLink>

        <NavLink
            to='/hello'
            activeClassName='navActive'>Hello</NavLink>

        <NavLink
            to='/products'
            activeStyle={NavActive}
            isActive={(match, location) => {

                console.log(match)

                if (!match) return false

                return !match.isExact;

            }}
        >Products</NavLink>
    </nav>
)

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Navegation />
            <Route path='/' exact component={HomeComponent} />
            <Route path='/hello' render={HelloComponent} />
            <Route path='/products/:id?' render={Products} />
        </BrowserRouter>
    )
}

export default DefaultComponent;




