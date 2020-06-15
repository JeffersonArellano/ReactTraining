import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//Basic Constant
const mainColor = '#FF758A';

//Complete Constant
const paddingBasic = 'padding: 0.4em;'

//Dinamic variables
/*const getLinearGradient = (rot, cloor1, color2) => {
    return `background: linear-gradient(${rot},${cloor1},${color2});`
}*/

const Header = styled.header`
    background:  #db7093 ;
    text-align: center;
    border-radius: 0.2em;
    color: #FFF;
    ${paddingBasic}
    margin:0.3em;
    font-size: 14px;
    transition: all 350ms ease-out;
    opacity:0.5;

    &:hover{
        opacity:1;
        background: #000;

        h1{
            color: red;
        }
    }

    h1{
        color: green;
    }

    .big{

        font-size:20px;
        color: black;
    }
`
const Button = styled.button`
    padding: 0.6em 1.5em;
    background: ${(props) => props.active ? 'purple' : 'black'};
    border-radius: 0.1em;
    color: #FFF;
    border: 0;
    margin: 0.4em;
`

const SpecialButton = styled(Button)`
    color:gray;
    transition:  all 300ms ease-out;

    &:hover{
        transform:  scale(1.3);
    }
`
const MoveElem = ({ className }) => {

    const [mouseX, setMouseX] = useState(0)

    const handleMove = (e) => {
        setMouseX(e.clientX)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }

    }, [])

    return (
        <div className={className}>
            Move x: {mouseX}
        </div>
    )
}

const MovedStyled = styled(MoveElem)`
    background-color: yellow;
    font-size: 30px;
    height:200px;
    text-align: center;
`

const StyledComponentSintaxs = () => {

    const [active, setActive] = useState(false)

    const toggle = () => setActive(!active)

    return (
        <div>
            <Header>
                <h1>Styled Component Sintax</h1>
                <div className='big'>First Div</div>
            </Header>

            <Button >
                Some Button
            </Button>
            <Button onClick={toggle} active={active}>
                Toogle
            </Button>
            <SpecialButton>
                Special Button
            </SpecialButton>

            <MovedStyled>

            </MovedStyled>
        </div>
    )
}

export default StyledComponentSintaxs