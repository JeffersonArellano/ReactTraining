import React, { Component } from 'react'
import './global.css'

/* Children are defined as: this.props.children is
an opaque data structure*/

class Parent extends Component {
    render() {

        const { children } = this.props
        console.log(children)

        return (
            <div className='box'>
                <div className='box blue'>
                    {/* {children} */}
                </div>
                <div className='box red'>
                    {/* {children} */}
                </div>
            </div>
        )
    }
}

class UnderstandingPropChild extends Component {

    render() {
        return (
            <div>
                <Parent>
                    Child Text
                    <div>Elements</div>
                    {() => { }}
                    {444}
                    {`The sum is: ${5 + 5}`}
                </Parent>
            </div >
        )
    }
}

export default UnderstandingPropChild
