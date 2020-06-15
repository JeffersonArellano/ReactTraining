import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Home = () => {
    return (
        <h1>Home</h1>
    )
}

const Videos = () => {
    return (
        <h1>Videos</h1>
    )
}
const Playlist = () => {
    return (
        <h1>Playlist</h1>
    )
}

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact render={Home} />
                <Route path='/videos' render={Videos} />
                <Route path='/videos' render={Playlist} />
            </Switch>
        </BrowserRouter>
    )
}

export default DefaultComponent;




