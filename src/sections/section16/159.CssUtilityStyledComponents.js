import React from 'react'
import styled, { css } from 'styled-components'

const Header = styled.header`
    background:  #db7093 ;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;    
    margin:0.3em;
    padding: 0.3em;
    font-size: 14px;    
`

const primaryStyles = css`
    
    border:${props => ` 2px solid ${props.borderColor || 'green'}`};
`
const Button = styled.button`
    padding: 1em 2em;
    margin: 1em;
    ${props => props.primary && primaryStyles}
`

const CssUtilityStyledComponents = () => {

    return (
        <div>
            <Header>
                <h1>Styled Components</h1>
            </Header>
            <Button>
                Push here
            </Button>
            <Button primary borderColor='Green'>
                Trigger Button
            </Button>
        </div>
    )
}

export default CssUtilityStyledComponents