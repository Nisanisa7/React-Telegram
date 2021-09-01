import React from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const linkStyle = {
    textDecoration: "none",
  };

const ModalWindow = ({ show, handleOpen }) => show ? ReactDOM.createPortal(

        <Styles  onClick={handleOpen}>
            <div className="wrapper">
            
                <Link to="" style={linkStyle}>
                <div className="add-contact">
                <i class="fa fa-lg fa-user-plus" aria-hidden="true"></i>
                </div>
                </Link>
                <Link to="" style={linkStyle}>
                <div className="add-contact">
                <i class="fa fa-lg fa-lock" aria-hidden="true"></i>
                </div>
                </Link>
                <Link to="" style={linkStyle}>
                <div className="add-contact">
                <i class="fa fa-lg fa-bullhorn" aria-hidden="true"></i>
                </div>
                </Link>
            </div>
        </Styles>, document.body
) : null;


export default ModalWindow
const Styles = styled.div`
  width: 218px;
  height: 50px;

  position: fixed;
  z-index: 1;
  left: 30px;
  top: 35px;
    .wrapper{
        padding-top :10px;
        padding-bottom :10px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background: #7E98DF;
        border-radius: 20px;    

        .fa:hover,
        .add-contact:hover{
            height: 20px;
            width: 20px;
            color: #2853c7;
        }
        .fa{
            color: white;
        }
    }

`