import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background:  #db7093 ;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;    
    margin:0.3em;
    padding: 0.3em;
    font-size: 14px;    
`

const Input = styled.input.attrs((props) => ({
    placeholder: props.placeholder || 'Input some text',
    type: props.type || 'text'
}))`
    padding: 1em;
    border: 1px solid blue;
`

const AttrStyledComponents = () => {

    return (
        <div>
            <Header>
                <h1>Styled Component Sintax</h1>
            </Header>
            <Input />
            <Input placeholder='Custom' />
        </div>
    )
}

export default AttrStyledComponents