import React, { useState, lazy, Suspense } from 'react'
import { MoonLoader } from 'react-spinners';

const Image = lazy(() => import("../components/Image"))


const ReactLazySuspense = () => {

    const [show, setShow] = useState(false)

    const styles = {
        display: 'flex',
        alighItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const toggle = () => {
        setShow(!show)
    }

    return (
        <div style={styles}>
            <button onClick={toggle}>
                {show ? 'Hide' : 'Show'}
            </button>
            {show && (
                <Suspense fallback={<MoonLoader color='orangered' />}>
                    <Image />
                </Suspense>
            )}
        </div>
    )
}

export default ReactLazySuspense