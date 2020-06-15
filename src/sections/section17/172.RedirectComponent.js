import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import '../../components/NavlinkStyles.css'

const Navegation = () => (
    <nav>
        <NavLink to='/' exac activeClassName='active'>Home</NavLink>
        <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
        <NavLink to='login' activeClassName='active'>Login</NavLink>
    </nav>
)


const Home = () => {
    return (
        <h1>Home</h1>
    )
}

const isAuth = false;

const Profile = () => {
    return isAuth
        ? <h1>Your Profile</h1>
        : <Redirect to={{
            pathname: '/login',
            state: {
                message: 'Please sign in'
            }
        }} />
}
const Login = ({ location }) => {

    if (location.state) {
        return <h1>{location.state.message}</h1>
    }
    return (
        <h1>Login</h1>
    )
}

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Navegation />
            <Route path='/' exact render={Home} />
            <Route path='/profile' render={Profile} />
            <Route path='/login' render={Login} />
            <Redirect from='/p' to='/profile' />
        </BrowserRouter>
    )
}

export default DefaultComponent;




