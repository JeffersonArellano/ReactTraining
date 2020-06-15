import React, { useState, useEffect } from 'react'
import './Slides.css'
import propTypes from 'prop-types'


const Slides = ({ images, interval }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {

        const tick = setInterval(() => {
            if (activeIndex < images.length - 1) {
                setActiveIndex(activeIndex + 1)
            }
            else {
                setActiveIndex(0)
            }
        }, interval)

        return () => clearInterval(tick)
    },
        [activeIndex, images.length, interval]
    )

    return (
        <div className='Slide'>
            <div className='Slide_Container'>
                {images.map((img, index) => (
                    <img
                        key={img.src}
                        src={img.src}
                        alt={img.title}
                        className={
                            index === activeIndex
                                ? 'Slide_Container_Img animationShow'
                                : 'Slide_Container_Img animationHide'

                        } />
                ))}
                <div className='Slide_Container_Title'> {images[activeIndex].title}</div>
            </div>
        </div>
    )
}

Slides.defaultProps = {
    interval: 5000,
    images: []
}

Slides.propTypes = {
    interval: propTypes.number,
    images: propTypes.arrayOf(
        propTypes.shape({
            src: propTypes.string.isRequired,
            title: propTypes.string.isRequired
        })
    )
}

export default Slides