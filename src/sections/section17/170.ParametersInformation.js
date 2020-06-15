import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import queryString from 'query-string'
import '../../components/NavLinkStyle.css'

const HelloComponent = () => (
    <h1>Hello</h1>
)

const Products = () => (
    <div>
        <h1>Products</h1>
        <Link to='/products/gamers'>Gamers</Link>
        <Link to='/products/home'>Home Elements</Link>
    </div>

)

const HomeComponent = (props) => {

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.name}</h1>
        </div>
    )
}

const ProductsCategory = ({ match }) => {
    console.log(match)
    return (
        <div>
            <h1>Category: {match.params.category}</h1>
        </div>
    )
}

const Clothes = ({ location }) => {
    console.log(location)

    const { color, size } = queryString.parse(location.search)


    return (
        <div>
            <h1>Clothes </h1>
            <div>Color: {color}</div>
            <div>Size: {size} </div>
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
        >Products</NavLink>

        <NavLink
            to="/clothes"
            activeStyle={NavActive}>
            Clothes
        </NavLink>
    </nav>
)

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Navegation />
            <Route path='/' exact render={HomeComponent} />
            <Route path='/hello' render={HelloComponent} />
            <Route path='/products' exact render={Products} />
            <Route path='/products/:category/:id?' render={ProductsCategory} />
            <Route path='/clothes' render={Clothes} />
        </BrowserRouter>
    )
}

export default DefaultComponent;




