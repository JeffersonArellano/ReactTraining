import React from 'react'
import styled from 'styled-components'

const sizes = {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px'
}

const devices = {
    mobile: (styles) => {
        return `@media (min-width: ${sizes.mobile}){
         ${styles}
        }`
    },
    tablet: (styles) => {
        return `@media (min-width: ${sizes.tablet}){
         ${styles}
        }`
    },
    desktop: (styles) => {
        return `@media (min-width: ${sizes.desktop}){
         ${styles}
        }`
    },
}


const Header = styled.header`
    background:  #db7093 ;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;    
    margin:0.3em;
    padding: 0.3em;
    font-size: 14px;

    ${devices.mobile`
        background: #000;
        font-size: 20px;
        color: yellow;
    `}    

    ${devices.tablet`
        background: red;
        font-size: 25px;
        color: #FFF;
    `}
`

const AttrStyledComponents = () => {

    return (
        <div>
            <Header>
                <h1>Styled Components</h1>
            </Header>
        </div>
    )
}

export default AttrStyledComponents