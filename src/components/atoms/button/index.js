import React from 'react'
import styled from 'styled-components'

const Button = ({children, className, color, type, onClick, }) => {
    return (
        <Styled className={className}>
            <button
              className={`button ${color}`} 
              type={type}
              onClick={onClick}>
            {children}

            </button>
        </Styled>
    )
}

export default Button
const Styled = styled.div`
.button{
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    border-radius: 70px;
    &.primary{
        background-color: #7E98DF;
        color: #FFFFFF;
    }&.primary:hover{
        background-color: #6283dd;
    }
    &.outer-primary{
        background: #FFFFFF;
        border: 1px solid #7E98DF;
        color: #7E98DF;
    }&.outer-primary:hover{
        background-color: #7E98DF;
        color: white;
    }&.transparant{
        background: none;
        border: none;
        outline: none;
    }
}
`