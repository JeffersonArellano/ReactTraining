import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import Counter from '../../components/Reducers/CounterRedux'
import Info from '../../components/Reducers/Info'

const DefaultComponent = () => {
    return (
        <Provider store={store}>
            <div>
                <Info />
                <Counter />
            </div>
        </Provider>
    )
}

export default DefaultComponent;




