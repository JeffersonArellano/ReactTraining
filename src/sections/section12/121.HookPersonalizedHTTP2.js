import React, { useState, useEffect } from 'react'
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
                React Personalized HTTP Hook
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame' />
            </div>
        </header>
    );
}


const useFetch = (url, initialState = []) => {
    const [data, setData] = useState(initialState)
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        setFetching(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setFetching(false)
            })
    }, [url])

    return [
        data,
        isFetching
    ]
}


const HookPersonalizedHTTP2 = () => {

    const [clicks, setClicks] = useState(1)
    const [user, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users/' + clicks, {})

    const add = () => setClicks(clicks + 1)

    return (
        <div>
            <Header />
            {isLoading && <h1>Loading...</h1>}
            <h1>{user.name}</h1>
            <p>{user.phone}</p>
            <button onClick={add}>
                Clicks({clicks})
            </button>
            {/* <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default HookPersonalizedHTTP2