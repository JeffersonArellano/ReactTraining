import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

const images = [
    'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg',
    'https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg',
    'https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
    'https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg'
]

const ReactRevealAnimations = () => {
    return (
        <div>
            <section>
                <h3>Title Example</h3>
                <p>
                    Lorem ipsum dolor sit
                </p>
            </section>
            <Rotate>
                <section>
                    <h3>Title Example</h3>
                    <p>
                        Lorem ipsum dolor sit
                </p>
                </section>
            </Rotate>
            <Bounce>
                <section>
                    <h3>Title Example</h3>
                    <p>
                        Lorem ipsum dolor sit
                </p>
                </section>
            </Bounce>
            <Zoom>
                <section>
                    <h3>Title Example</h3>
                    <p>
                        Lorem ipsum dolor sit
                </p>
                </section>
            </Zoom>

            <Zoom>
                <section>
                    <h3>Title Example</h3>
                    <p>
                        Lorem ipsum dolor sit
                </p>
                </section>
            </Zoom>

        </div>
    )
}

export default ReactRevealAnimations