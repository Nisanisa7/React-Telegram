import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import { Button, HeaderAuth, Inputfield } from '../../components/atoms';

const ForgotPassword = () => {
    const history = useHistory()
    useEffect(() => {
        document.title = 'Telegram | Forgot Password';
        document.body.style.backgroundColor = "#E5E5E5";
    });
    const handleBack = () =>{
        history.push('/login')
    }
    return (
        <Styles>
            <div className="wrapper">
                <HeaderAuth className="header" title="Forgot Password" onClick={handleBack} />
                <p className="welcome-wagoon">You’ll get messages soon on your e-mail </p>
                <div className="form">

                    <Inputfield
                        className="input-field"
                        label="Email"
                        onChange=""
                        type="email"
                    />
      
                    <Button classname="button" color="primary">Send</Button>
                </div>
                <div className="hidden">
                    you cant see me!
                </div>

            </div>
        </Styles>
    )
}

export default ForgotPassword
const Styles = styled.div`
.wrapper{
    width: 500px;
    background: #FFFFFF;
    box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
    border-radius: 30px;
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    /* height: 700px; */
    margin-top: 50px;
        .header{
            padding-top: 42px;
            padding-bottom: 37px;
        }
        .welcome-wagoon{
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #232323;
        }
        .input-field{
            margin-top: 35px;
        }
        .forgot-pass{
            margin-top: 35px;
            text-align-last: right;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
        }
        .forgot-pass a, .register-link a{
            color: #7E98DF;
            text-decoration: none;
        }
         h6 {
            display: flex;
            margin-top: 50px;
            flex-direction: row;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #848484;
     
            }
            h6:before,
            h6:after {
              flex-grow: 1;
              height: 1px;
              content: "";
              background-color:  #848484;
              position: relative;
              top: 0.5em;
              margin-left: 10px;
              margin-right: 10px;
   
            }
            h6:before {
              margin-top: 2px;

            }
            h6:after {
              margin-top: 2px;
            }
        .button{
            margin-top: 35px;
            width: 360px;
            height: 60px;
            cursor: pointer;
            text-align: center;

            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
                img{
                    width: 17px;
                    height: 18px;
                    margin-right: 15px;
                }
        }
        .register-link{
            margin-top: 30px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #313131;
            text-align: center;
        }
        .hidden{
            visibility: hidden;
            margin-top: 1px;
        }
    }


`