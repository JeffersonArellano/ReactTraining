import React, { Component } from 'react'
import './global.css'

/* Children are defined as: this.props.children is
an opaque data structure*/

class Parent extends Component {
    render() {
        const { children: ch } = this.props

        const childrenArray = React.Children.toArray(ch)

        const children = childrenArray.map((child, index) => (
            <li key={index}>
                {child}
            </li>
        ))

        console.log(children)

        return (
            <div className='box'>
                <div className='box blue'>
                    {children}
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
                    <span>Orange</span>
                    {/* <span>Strawberry</span>
                    <span>Apple</span>
                    <span>Mango</span> */}
                </Parent>
            </div >
        )
    }
}

export default UnderstandingPropChild
