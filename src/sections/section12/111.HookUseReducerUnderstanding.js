import React, { useState, useReducer } from 'react';
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
                Hook Understanding useReducer()
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

//
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }

        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            }

        default:
            return state
    }

}

const initialState = {
    count: 0,
    title: 'Hi'
}

const HookUseReducerUnderstanding = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    const handleTitle = (e) => {
        dispatch({
            type: 'SET_TITLE',
            title: e.target.value
        })
    }

    return (
        <div>
            <Header />
            <input onChange={handleTitle} value={state.title}></input>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <h1>{state.count} - {state.title}</h1>
        </div>
    )
}

export default HookUseReducerUnderstanding