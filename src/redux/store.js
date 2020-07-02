import { createStore } from 'redux'
import rootReducer from '../components/reducers'
import { INCREMENT, DECREMENT } from '../components/reducers'

//Reducer
//Funcion que nos regresa el estado actual


//store.getState()
//store.dispatch()
//store.subscribe(func) 

// store.subscribe(() => {
//     console.log(store.getState())
// })

//Actions Creator
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

// store.dispatch(increment())


// setTimeout(() => {
//     store.dispatch(decrement())
// }, 2000);


// Store 
// Almacenamiento de nuestro estado
const store = createStore(rootReducer)

export default store