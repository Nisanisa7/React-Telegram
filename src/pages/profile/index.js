import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Swal from 'sweetalert2';
import { DefaultAvatar, Lock } from '../../assets';
import { Button, Inputfield, Sidebar } from '../../components/atoms';
import { updateProfile } from '../../config/Redux/actions/authAction';
import Buttonboo from "react-bootstrap/Button";

const Profile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const dataUser = useSelector(state => state.user.profile.data)
    const idUser = localStorage.getItem('idUser')
    const [preview, setImagePreview] = useState(null)
    const [errImage, setErrImage] = useState(false)
    const [errImageType, setErrImageType] = useState(false)
    console.log(dataUser.token);

    useEffect(() => {
        document.title = 'Telegram | Profile';
    });
    const handleBack = () => {
        history.push('/')
    }

    const [showing, setShowing] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputImage = (e) => {
        e.preventDefault()
        if (e.target.files[0].size > 1048576) {
            setErrImage(true)
            setErrImageType(false)
        }
        else if (e.target.files[0].type !== "image/png" && e.target.files[0].type !== "image/jpg" && e.target.files[0].type !== "image/jpeg") {
            setErrImageType(true)
            setErrImage(false)
        }
        else if (e.target.files.length !== 0) {
            setErrImage(false)
            setErrImageType(false)
            setImagePreview(URL.createObjectURL(e.target.files[0]))
            dispatch({ type: 'CHANGE_VALUE', payload: { preview: preview } })
        }
        // setImagePreview(URL.createObjectURL(e.target.files[0]))
        dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.files[0] } })
    }
    const handleChange = (e) => {
        dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.value } })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProfile(dataUser, dataUser.token, dataUser.idUser, handleInputImage))
        // dispatch(getCurrentProfile(dataUser.idUser))

    }
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login"
    }
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_BACKEND_API}/user/${idUser}`)
            .then(() => {
                Swal.fire(
                'Deleted!',
                'Your Account has been deleted, BYE BYE',
                'success'
                )
            localStorage.clear();
            history.push('/login')
        })
    }
    return (
        <Styles>
            <div className="row g-0">
                <div className="col col-4">
                    <Sidebar className="sidebar">
                        <div className="header-wrapper">
                            <Button className="btn" color="transparant" onClick={handleBack}>
                                <i className="fa fa-chevron-left fa-2x"></i>
                            </Button>
                            <h4>{dataUser.username}</h4>
                        </div>
                        <div className="profile">
                            <div className="photo-profile">
                                <img src={preview ? preview : dataUser.avatar ? dataUser.avatar : DefaultAvatar} alt="" className="avatar" />
                            </div>
                            <div className="display-name">
                                {dataUser.name}
                            </div>
                            <div className="username">
                                {dataUser.username} <i onClick={() => { setShowForm(!showForm) }} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="contact">
                            <h5>Account</h5>
                            <p className="phone-number">{dataUser.phone_number}</p>
                            <p onClick={() => { setShowing(!showing) }} className="phone-change" >tap to change ur phone  number</p>
                            <div className="hidden">hidden</div>
                        </div>
                        <div className="status-wrap">
                            <p className="user-bio">{dataUser.status_bio}</p>
                            <label htmlFor="">Bio</label>
                            <div className="hidden">hidden</div>
                        </div>
                        <div className="list-group ">
                            <h5>Settings</h5>
                            <a href="" onClick={handleShow} className="list-group-item list-group-item-action border-0 ">
                                <img src={Lock} alt="" />
                                <span>Delete Account</span>
                            </a>
                            <a href="#" onClick={handleLogout} className="list-group-item list-group-item-action border-0 ">
                                <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </Sidebar>
                </div>
                <div className="col col-8">
                    {showing ?
                        //Form for Update Phone Number
                        <div className="wrapper">
                            <p className="welcome-wagoon">Change phone number</p>
                            <div className="form">
                                <Inputfield
                                    className="input-field"
                                    label="Phone number"
                                    type="text"
                                    name="text"
                                />
                                <Button classname="button" color="primary">Save Changes</Button>
                            </div>
                            <div className="hidden">
                                you cant see me!
                            </div>
                        </div>
                        : null}

                    {showForm ?
                        <div className="wrapper-form">
                            <div className="profile-group">
                                <div className="profile-wrapper">
                                    <img className="images" src={preview ? preview : dataUser.avatar ? dataUser.avatar : DefaultAvatar} alt="" />

                                    <div className="profile-btn">
                                        <input id="upload" type="file" name="avatar" onChange={handleInputImage} />
                                        <label className="button" for="upload">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </label>
                                    </div>
                                    {errImage ? <p className="error">Image size is too large. max 1mb</p> : ''}
                                    {errImageType ? <p className="error">Invalid file type. only png, jpg, and jpeg format allowed</p> : ''}
                                </div>
                            </div>
                            <div className="form">
                                <h4>Edit Profile</h4>
                                <Inputfield
                                    className="input-field"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    value={dataUser.name || ''}
                                    onChange={handleChange}
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Username"
                                    type="text"
                                    name="username"
                                    value={dataUser.username}
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Bio"
                                    type="text"
                                    name="status_bio"
                                    value={dataUser.status_bio || ''}
                                    onChange={handleChange}
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Phone Number"
                                    type="text"
                                    name="phone_number"
                                    onChange={handleChange}
                                    value={dataUser.phone_number}
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={dataUser.email}
                                />
                            </div>
                            <div className="container">

                                <div className="row">
                                    <div className="col">
                                        <Button className="button" color="primary" onClick={handleSubmit}>Save Changes</Button>
                                    </div>
                                    <div className="col">
                                        <Button className="button" color="outer-primary" onClick={() => { setShowForm(!showForm) }}>Cancel</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Once you delete your account, all of your chat and information will be deleted</Modal.Body>
                    <Modal.Footer>
                        <Buttonboo variant="secondary" onClick={handleClose}>
                            Close
                        </Buttonboo>
                        <Buttonboo variant="danger" onClick={() => handleDelete()}>
                            Delete
                        </Buttonboo>
                    </Modal.Footer>
                </Modal>
        </Styles>
    )
}

export default Profile
const Styles = styled.div`
.sidebar{
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 5px 0 5px -5px;
    padding: 0 30px;
    .header-wrapper{
        display: flex;
        flex-direction: row;
        padding-top: 43px;
      
        .btn{
            
            .fa{
                
                color: #7E98DF;
                border-radius: 30px;
            }
        }
        h4{
           flex: 1;
           font-family: 'Rubik';
           font-style: normal;
           font-weight: 500;
           font-size: 24px;
           line-height: 28px;
           padding-top: 10px;
           color: #7E98DF;      
           
        }
    }
    .profile{
            text-align: center;
            margin-top: 50px;
            .photo-profile{
                .avatar{
                background: #acacac;
                width: 82px;
                height: 82px;
                border-radius: 30px;
                object-fit: cover;
                object-position: center right;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom:35px;   
                }
            }
            .photo-profile:hover .avatar{
                opacity: 0.7;
                transition: .5s ease;
            }
            .display-name{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 26px;
                letter-spacing: -0.165px;
                color: #232323;
                padding-bottom: 7px;
                @media screen and (min-width: 576px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 18px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 20px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 22px;
                    }
            }
            h5{
                font-family: 'Rubik';
                font-size: 19px;
                line-height: 23px;
                color: #232323;
                @media screen and (min-width: 576px) {
                    font-size: 16px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 17px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 19px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 19px;
                    }
            }
            .username{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 19px;
                color: #848484;
                @media screen and (min-width: 576px) {
                    font-size: 13px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 14px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 16px;
                    }
                letter-spacing: 1.335px;
                .fa-pencil-square-o{
                    cursor: pointer;
                }
            }
        }  
    .contact{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        margin-top: 35px;
        margin-bottom: 35px;
            .phone-number{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 1.335px;
                color: #232323;
                @media screen and (min-width: 576px) {
                    font-size: 13px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 14px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 16px;
                    }
            }
            .phone-change{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: -0.17px;
                color: #7E98DF;
                cursor: pointer;
                @media screen and (min-width: 576px) {
                    font-size: 13px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 14px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 16px;
                    }
            }
            .hidden{
                visibility: hidden;
            }
        }
    .status-wrap{
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        margin-bottom: 35px;
            .user-bio{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 181%;
                color: #232323;
                @media screen and (min-width: 576px) {
                    font-size: 13px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 14px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 16px;
                    }
            }
            label{
                font-family: 'Rubik';
                font-style: normal;
                font-size: 16px;
                line-height: 19px;
                color: #848484;
                @media screen and (min-width: 576px) {
                    font-size: 13px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 14px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 16px;
                    }
            }
            .hidden{
                visibility: hidden;
            }
    } 
    .list-group{
            .list-group-item{
                margin-top: 25px;
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 20px;
                color: #7E98DF;
                @media screen and (min-width: 576px) {
                    font-size: 14px;
                    }
                @media screen and (min-width: 768px) {
                    font-size: 15px;
                    }
                @media screen and (min-width: 992px) {
                    font-size: 16px;
                    }
                @media screen and (min-width: 1200px) {
                    font-size: 17px;
                    }
                    span{
                        padding-left: 30px;
                        @media screen and (max-width: 576px) {
                            visibility: hidden;
                            }
                        @media screen and (min-width: 768px) {
                            padding-left: 30px;
                            }
                        @media screen and (min-width: 992px) {
                            padding-left: 30px;
                            }
                        @media screen and (min-width: 1200px) {
                            padding-left: 30px;
                            }
                    }
            }
    
    }
}
.wrapper{
    width: 500px;
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 30px;
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    /* height: 700px; */
    margin-top: 90px;
    
        .header{
            padding-top: 60px;
            padding-bottom: 37px;
        }
        .welcome-wagoon{
            padding-top: 50px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color: #232323;
        }
        .input-field{
            margin-top: 50px;
        }
        .button{
            margin-top: 35px;
            width: 360px;
            height: 48px;
            cursor: pointer;
            text-align: center;

            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
        }
        .hidden{
            visibility: hidden;
            margin-top: 1px;
        }

    }
.wrapper-form{
    width: 85%;
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 30px;
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    height: 800px;
    margin-top: 90px;
    padding-top: 30px;
    .profile-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .profile-wrapper{
            width: 120px;
            height: 120px;
            margin-top: 35px;
            background: #D4D4D4;
            border-radius: 100%;
            position: relative;
        .images{
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 30px;
            }
        .error{
            color: red;
        }
        }
        .profile-btn{
            position: relative;
            display: flex;
            input[type="file"] {
                position: absolute;
                top: 15px;
                left: 20px;
                visibility: hidden;
                font-size: 17px;
                color: #b8b8b8;
            }
            .button {
                display: inline-block;
                background-color: #7E98DF;
                border-radius: 50%;
                color: #ffffff;
                text-align: center;
                font-size: 20px;
                padding: 8px;
                width: 50px;
                height: 50px;
                transition: all 0.5s;
                cursor: pointer;
                margin: 5px;
                position:absolute;
                left: 70%;
                top:1;
                bottom: 0;
            }
            .button:hover {
                    background-color: #715ce4;
                }
        }
    }
    .form{
        margin-top: 40px;
        .input{
            width: 100%;
            margin-top: 30px;
        }
    }
    .button{
        margin-top: 20px;
        width: 100%;
        height: 45px;
    }
}
    `
