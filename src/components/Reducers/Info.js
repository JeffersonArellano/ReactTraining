import React from 'react'
import { } from '../../redux/store'
import { connect } from 'react-redux'


const Info = ({ name, counter }) => {
    return (
        <div>
            <h1>User Name: {name} Counter: {counter}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { counter: state.counter, name: state.user.name }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);    