import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, HeaderAuth, Inputfield } from '../../components/atoms';
import { registerUser } from '../../config/Redux/actions/authAction';

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        document.title = 'Telegram | Register';
        document.body.style.backgroundColor = "#E5E5E5";
    });
    const handleBack = () =>{
        history.push('/login')
    }
    const [form, setForm] = useState({
        'username' :'',
        'email':'',
        'password':''
    })
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleRegister = (e) =>{
        dispatch(registerUser(form, history))
    }
    return (
        <Styles>
            <div className="wrapper">
                <HeaderAuth className="header" title="Register" onClick={handleBack} />
                <p className="welcome-wagoon">Let's create your account!</p>
                <div className="form">
                    <Inputfield
                        className="input-field"
                        label="Name"
                        onChange={handleChange}
                        name="username"
                        type="text"

                    />
                    <Inputfield
                        className="input-field"
                        label="Email"
                        onChange={handleChange}
                        name="email"
                        type="email"

                    />
                    <Inputfield
                        className="input-field"
                        label="Password"
                        onChange={handleChange}
                        type="password"
                        name="password"

                    />
                    <Button onClick={handleRegister} classname="button" color="primary">Register</Button>
                    <h6>Register with</h6>
                    <Button classname="button" color="outer-primary">
                        <span>
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                        </span>
                        Google
                    </Button>
              
                </div>
                <div className="hidden">
                    you cant see me!
                </div>

            </div>
        </Styles>
    )
}

export default Register
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