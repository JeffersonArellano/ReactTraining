import React, { useState, useContext } from 'react';
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
                HOOK Rules
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}

//{Provider, Consumer}
const MyContext = React.createContext();

const Child1 = () => (
    <div>
        <p>Child 1</p>
        <Child2 />
    </div>
)

/*Traditional consum
const Child2 = () => (
    <MyContext.Consumer>
        {(context) => (
            <div>
                <p>Child 2 {context.num}</p>
                <button onClick={context.addNum}>
                    Child 2 Dispatcher
                </button>
            </div>
        )}
    </MyContext.Consumer>
)*/

const Child2 = () => {

    const { num, addNum } = useContext(MyContext)

    return (
        <div>
            <p>Child 2 {num}</p>
            <button onClick={addNum}>
                Child 2 Dispatcher
                </button>
        </div>
    )
}

const HookUseContextUnderstanding = () => {

    const [num, setNum] = useState(0)

    const addNum = () => setNum(num + 1)

    return (
        <MyContext.Provider value={{
            num,
            addNum
        }}>
            <div>
                <Header />
                <button onClick={addNum}>
                    Clicks({num})
            </button>
                <Child1 />
            </div>
        </MyContext.Provider >
    )
}

export default HookUseContextUnderstanding