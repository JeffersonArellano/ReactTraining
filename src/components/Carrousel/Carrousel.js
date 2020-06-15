import React, { useState } from 'react'
import './Carrousel.css'
import propTypes from 'prop-types'
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group'


const Carrousel = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const left = () => {

        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
        else {
            setActiveIndex(images.length - 1)
        }
    }

    const right = () => {

        if (activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
        else {
            setActiveIndex(0)
        }
    }

    return (
        <div className='Carrousel'>
            <div className='Carrousel_Buttons'>
                <button onClick={left}>
                    Back
                </button>
                <button onClick={right}>
                    Forward
                </button>
            </div>
            <TransitionGroup>
                <CSSTransition
                    timeout={1000}
                    classNames='slide'
                    key={activeIndex}
                >
                    <img
                        className='Carrousel_Img'
                        src={images[activeIndex]}
                        alt=''>
                    </img>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

Carrousel.defaultProps = {
    images: []
}

Carrousel.propTypes = {

    images: propTypes.arrayOf(
        propTypes.string
    )
}


export default Carrousel