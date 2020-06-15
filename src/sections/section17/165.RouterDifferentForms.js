import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const HelloComponent = () => (
    <h1>Hello Component</h1>
)

const Products = () => (
    <h1>Products</h1>
)

const HomeComponent = () => (
    <h1>Home Component</h1>
)

const DefaultComponent = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={HomeComponent} />
            <Route path='/hello' render={HelloComponent} />
            <Route path='/Products'>
                {({ match }) => {
                    if (!match) return (
                        <div>
                            Not Match ****
                        </div>
                    )
                    return (
                        <Products />
                    )
                }}
            </Route>
        </BrowserRouter>
    )
}

export default DefaultComponent;




