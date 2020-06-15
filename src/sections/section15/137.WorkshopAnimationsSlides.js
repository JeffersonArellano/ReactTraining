import React from 'react'
import Slides from '../../components/Slides'

const imagesList = [
    {
        src: 'https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg',
        title: 'Art Table'
    },
    {
        src: 'https://images.pexels.com/photos/3563888/pexels-photo-3563888.jpeg',
        title: 'Forest Art'
    },
    {
        src: 'https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg',
        title: 'Motorcycle Art'
    },
    {
        src: 'https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg',
        title: 'Black woman Art'
    },
    {
        src: 'https://images.pexels.com/photos/3064717/pexels-photo-3064717.jpeg',
        title: 'Beautiful woman Art'
    }
]


const WorkshopAnimationSlides = () => {
    return (
        <div>
            <Slides
                interval={2000}
                images={imagesList} />
        </div>
    )
}

export default WorkshopAnimationSlides