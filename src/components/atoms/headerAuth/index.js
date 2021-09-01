import React from 'react'
import styled from 'styled-components'

const HeaderAuth = ({ title, className, onClick }) => {
    return (
        <Styles className={className}>
            <div className="back-wrapper">
                <button type="submit" onClick={onClick} class="backButton">
                    <i class="fa fa-chevron-left fa-2x"></i>
                    <p>{title}</p>
                </button>
            </div>
        </Styles>
    )
}

export default HeaderAuth
const Styles = styled.div`
    .back-wrapper { 
     
    .backButton {
      width: 400px;
      height: 28px;
      border: none;
      outline: none;
      background: none;
      display: flex;
      flex-direction: row;
      .fa {
        color: #7E98DF;
        stroke-width: 10;
      }
      .fa-chevron-left g g path {
        stroke: black;
        stroke-width: 90px;
      }
      p {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.165px;
        color: #7E98DF;
        padding-left: 100px;
      }
    }
  }


`