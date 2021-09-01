
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactDOM from "react-dom";
const linkStyle = {
    textDecoration: "none",
  };
const ModalMenu = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
       
        <Styles  onClick={toggle}>

            <div  className="card-wrapper">
                <div className="container">

                    <Link to="" style={linkStyle}>
                   <div className="row">
                       <div className="col-2">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                       </div>
                       <div className="col text">
                            Setting
                       </div>
                   </div>
                    </Link>
                    <Link to="" style={linkStyle}>
                   <div className="row">
                       <div className="col-2">
                       <i class="fa fa-user-o" aria-hidden="true"></i>
                       </div>
                       <div className="col text">
                            Contacts
                       </div>
                   </div>
                   </Link>
                   <Link to="" style={linkStyle}>
                   <div className="row">
                       <div className="col-2">
                       <i class="fa fa-phone" aria-hidden="true"></i>
                       </div>
                       <div className="col text">
                            Calls
                       </div>
                   </div>
                   </Link>
                   <Link to="" style={linkStyle}>
                   <div className="row">
                       <div className="col-2">
                       <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                       </div>
                       <div className="col text">
                            Save Messages
                       </div>
                   </div>
                   </Link>
                   <Link to="" style={linkStyle}>
                   <div className="row">
                       <div className="col-2">
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                       </div>
                       <div className="col text">
                            Invite Friends
                       </div>
                   </div>
                   </Link>
                   <Link to="" style={linkStyle}>
                   <div className="row">
                       <div className="col-2">
                            <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                       </div>
                       <div className="col text last">
                            Telegram FAQ
                       </div>
                   </div>
                   </Link>
               
                
                
                
               

                </div>
            </div>
        </Styles>, document.body
) : null;
export default ModalMenu;
const Styles = styled.div`
  width: 250px;
  height: 360px;
  position: fixed;
  z-index: 1;
  top: 80px;
  left: 100px;
.card-wrapper{
    padding-left: 30px;
    background: #7E98DF;
    border-radius: 35px 10px 35px 35px;
        .row{
            text-decoration: none;
            padding-top: 20px;
                .col-2 .fa{
                    color: white;
                }
                .text{
                    font-family: 'Rubik';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 19px;
                    color: #FFFFFF;
                }
                .text:hover{
                    color: #0e3bb9;
                }
                .last{
                    padding-bottom: 20px;
                }
        }
        .row:hover{
            color: #6280d1;
            width: 100%;
        }
        .row .text{
         
             text-decoration: none;
        }

}


`