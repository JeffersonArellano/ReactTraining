import React, { useState } from 'react';
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
                React Memo Understanding
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

const Counter = React.memo(({ count }) => {

    console.log('%cRender <Counter/>', 'color:blue')

    return (
        <h1>{count}</h1>
    )
})

const Title = React.memo(({ text }) => {

    console.log('%cRender <Title/>', 'color:red')

    return (
        <h1>{text}</h1>
    )
})


const ReactMemoUnderstanding = () => {

    const [title, setTitle] = useState('')
    const [count, SetCount] = useState(0)

    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleClick = () => {
        SetCount(count + 1)
    }

    return (
        <div>
            <Header />
            <input type='text'
                onChange={handleInput}>
            </input>
            <button onClick={handleClick}>
                Add
            </button>
            <Counter count={count} />
            <Title text={title} />
        </div>
    )
}

export default ReactMemoUnderstanding