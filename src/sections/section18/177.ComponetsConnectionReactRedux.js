import React from 'react'
import { Provider } from 'react-redux'
import Counter from '../../components/Reducers/CounterRedux'
import store from '../../store'

const DefaultComponent = () => {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>
    )
}

export default DefaultComponent;




