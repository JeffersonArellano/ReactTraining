import React, { useState, useMemo } from 'react'
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
                React use callback
                <img style={imageStyle}
                    src={flameImg}
                    alt='flame'></img>
            </div>
        </header>
    );
}


const SuperList = ({ list, log }) => {

    console.log('%cRender <SuperList/> ' + log, 'color:green')

    return (
        <ul>
            {list.map(item => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    )
}


const HookUserMemoPerformance = () => {

    const [num, setNum] = useState(0)

    const add = () => {
        setNum(num + 1)
    }

    const memoList = useMemo(() => {
        return (

            <SuperList
                list={[1, 12, 33, 45, 87, 65]}
                log='Memorized'
            ></SuperList>
        )
    }, [num])


    return (
        <div>
            <Header />
            <button onClick={add}>
                Num : ({num})
            </button>
            <SuperList
                list={[
                    'Orange',
                    'Pink',
                    'Purple',
                    'Yellow'
                ]}
                log='Normal'
            ></SuperList>
            {memoList}

        </div>
    )
}

export default HookUserMemoPerformance