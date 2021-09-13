import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, HeaderAuth, Inputfield } from '../../components/atoms';
import { registerUser } from '../../config/Redux/actions/authAction';
import { useFormik } from "formik";
import * as Yup from 'yup';

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
    const formik = useFormik({
    initialValues: {
        username:'',
        email: '',
        password:''
    },
    onSubmit: values =>{
        dispatch(registerUser(values, history))
    },
    validationSchema: Yup.object({

        username: Yup.string().required('Username is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        password: Yup.string().required('Password is required').min(8, "Password must be at least 8 characters")
    })
})
    return (
        <Styles>
            <div className="wrapper">
                <form onSubmit={formik.handleSubmit}>             
                <HeaderAuth className="header" title="Register" onClick={handleBack} />
                <p className="welcome-wagoon">Let's create your account!</p>
                <div className="form">
                    <Inputfield
                        className="input-field"
                        label="Username"
                        onChange={formik.handleChange}
                        name="username"
                        type="text"
                        value={formik.values.username}
                        error={formik.errors.username}

                    />
                    {formik.errors.username && formik.touched.username && ( <p className="errors">{formik.errors.username}</p>)}
                    <Inputfield
                        className="input-field"
                        label="Email"
                        onChange={formik.handleChange}
                        name="email"
                        type="email"
                        value={formik.values.email}
                        error={formik.errors.email}

                    />
                    {formik.errors.email && formik.touched.email && ( <p className="errors">{formik.errors.email}</p>)}
                    <Inputfield
                        className="input-field"
                        label="Password"
                        onChange={formik.handleChange}
                        type="password"
                        name="password"
                        value={formik.values.pssword}
                        error={formik.errors.password}

                    />
                    {formik.errors.password && formik.touched.password && ( <p className="errors">{formik.errors.password}</p>)}
                    <Button type="submit" classname="button" color="primary">Register</Button>
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
                </form>
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