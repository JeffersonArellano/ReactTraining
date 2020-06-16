import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import '../../components/NavlinkStyles.css'
import { countSubscriptions } from 'pubsub-js'

const Navegation = () => (
    <nav>
        <NavLink to='/' exac activeClassName='active'>Home</NavLink>
        <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
        <NavLink to='login' activeClassName='active'>Login</NavLink>
    </nav>
)

const Home = () => {
    return (<h1>Home</h1>)
}

const Profile = () => {
    return (<h1>Profile Page</h1>)
}
const Login = () => {
    return (<h1>Login</h1>)
}

const ImperativeNavigation = ({ history }) => {
    return (

        <div>
            <button onClick={history.goBack}>Go Back</button>
            <button onClick={history.goForward}>Go Forward</button>
            <button onClick={() => { history.go(2) }}>Go</button>
            <button onClick={() => history.push('/home')}>Go home</button>
            <button onClick={() => history.replace('/login')}>Go Replace</button>
            <h1>Imperative Navigation </h1>
        </div>

    )
}

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Navegation />
            <Route render={ImperativeNavigation}></Route>
            <Route path='/' exact render={Home} />
            <Route path='/profile' render={Profile} />
            <Route path='/login' render={Login} />
        </BrowserRouter>
    )
}

export default DefaultComponent;




