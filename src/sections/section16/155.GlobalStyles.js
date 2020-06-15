import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
        font-family: 'Chelsea Market', cursive;
    }
`

const Header = styled.header`
    background:  #db7093 ;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;    
    margin:0.3em;
    padding: 0.3em;
    font-size: 14px;    
`

const StyledComponentSintaxs = () => {

    return (
        <div>
            <GlobalStyles />
            <Header>
                <h1>Styled Component Sintax</h1>
            </Header>
        </div>
    )
}

export default StyledComponentSintaxs