import React, { useState, useEffect } from 'react';
import './App.css';
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
                HOOK Use Effect HTTP
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const HookUseEffectHTTP = () => {

    const [users, setUsers] = useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
                setFetching(false)
            })
    }, [])

    return (
        <div>
            <Header />
            {isFetching && <h1>Loading...</h1>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HookUseEffectHTTP