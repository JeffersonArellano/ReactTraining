import React, { useState } from 'react'
import flameImg from '../../images/flame.png'
import { ScaleLoader } from 'react-spinners'
import './135.Animations.css'

const Header = ({ show }) => {

    const clases = show
        ? 'header header-active'
        : 'header'

    return (
        <header className={clases}>
            <h1 >
                CSS Transitions And Animations
                <img className='imageStyle'
                    src={flameImg}
                    alt='flame'></img>
            </h1>
        </header>
    );
}

const CssClassesTransitionAnitions = () => {

    const [active, setActive] = useState(false)

    const toggle = () => setActive(!active)

    return (
        <div>
            <button onClick={toggle}>
                {active ? 'Hide' : 'Show'}
            </button>
            <Header show={active} />
        </div>
    )
}

export default CssClassesTransitionAnitions