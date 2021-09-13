
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Inputfield } from '../../components/atoms';
import { loginUser } from '../../config/Redux/actions/authAction';
import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = ({setSocket}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        onSubmit: values =>{
            dispatch(loginUser(values, history, setSocket))
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required').email('Email is invalid'),
            password: Yup.string().required('Password is required')
        })
    })
    useEffect(() => {
        document.title = 'Telegram | Login';
        document.body.style.backgroundColor = "#E5E5E5";
    });
    return (
        <Styles>

            <div className="wrapper">
                <div className="logo">Login</div>
                <p className="welcome-wagoon">Hi, Welcome Back!</p>
                <form onSubmit={formik.handleSubmit}>          
                <div className="form">
                    <Inputfield
                        className="input-field"
                        name="email"
                        value={formik.values.email}
                        label="Email"
                        onChange={formik.handleChange}
                        type="email"
                        error={formik.errors.email}
                    />
                    {formik.errors.email && formik.touched.email && ( <p className="errors">{formik.errors.email}</p>)}
                    <Inputfield
                        className="input-field"
                        label="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        error={formik.errors.password}
                    />
                      {formik.errors.password && formik.touched.password && ( <p className="errors">{formik.errors.password}</p>)}
                    <div class="forgot-pass">
                        <Link to="/reset">
                            Forgot password
                            ?</Link>
                    </div>
                    <Button type="submit" classname="button" color="primary">Login</Button>
                    <h6>Login with</h6>
                    <Button classname="button" color="outer-primary">
                        <span>
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                        </span>
                        Google
                    </Button>
                    <div class="register-link">
                        Dont have an account? <Link to="./register">Sign Up</Link>
                    </div>
                </div>
                <div className="hidden">
                    you cant see me!
                </div>
                </form>
            </div>
        </Styles>
    )
}

export default Login
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
        .logo{
            padding-top: 42px;
            padding-bottom: 36px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 26px;
            text-align: center;
            letter-spacing: -0.165px;
            color: #7E98DF;
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
