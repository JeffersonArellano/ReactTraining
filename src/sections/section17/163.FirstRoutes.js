import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const HelloComponent = () => (
    <h1>Hello Component</h1>
)

const Products = () => (
    <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        <li>Product 5</li>
    </ul>
)

const FirstRoutes = () => {
    return (
        <BrowserRouter>
            <Route
                path='/hello'
                component={HelloComponent} />
            <section>
                <Route
                    path='/products'
                    component={Products} />
            </section>
            <div>
                <Route
                    path='/products'
                    component={Products} />
            </div>
        </BrowserRouter>
    )
}

export default FirstRoutes;




