import React from 'react'
import { increment, decrement } from '../../redux/store'
import { connect } from 'react-redux'

const Counter = ({ increment, decrement, counter, name }) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>Count: {counter}</h1>
            <p>
                User Name:  {name}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { counter: state.counter, name: state.user.name }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);