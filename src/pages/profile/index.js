import React, { useEffect } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { ChartStatus, ChatLogo, DeviceLogo, Lock, Union, Yennefer } from '../../assets';
import { Button, Inputfield, Sidebar } from '../../components/atoms';

const Profile = () => {
    const history = useHistory()
    useEffect(() => {
        document.title = 'Telegram | Profile';
    });
    const handleBack = () => {
        history.push('/')
    }
    //showing all hidden components
    const [showing, setShowing] = useState(false)
    const [showForm, setShowForm] = useState(false)
    return (
        <Styles>
            <div className="row g-0">
                <div className="col col-4">
                    <Sidebar className="sidebar">
                        <div className="header-wrapper">
                            <Button className="btn" color="transparant" onClick={handleBack}>
                                <i class="fa fa-chevron-left fa-2x"></i>
                            </Button>
                            <h4>Username</h4>
                        </div>
                        <div className="profile">
                            <div className="photo-profile">
                                <img src={Yennefer} alt="" className="avatar" />
                            </div>
                            <div className="display-name">
                                Bame
                            </div>
                            <div className="username">
                                @username <i onClick={() => { setShowForm(!showForm) }} class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="contact">
                            <h5>Account</h5>
                            <p className="phone-number">Phone number</p>
                            <p onClick={() => { setShowing(!showing) }} className="phone-change" >tap to change ur phone  number</p>
                            <div className="hidden">hidden</div>
                        </div>
                        <div className="status-wrap">
                            <p className="user-bio">Feelin cute today might suffer later</p>
                            <label htmlFor="">Bio</label>
                            <div className="hidden">hidden</div>
                        </div>
                        <div class="list-group ">
                            <h5>Settings</h5>
                            <a href="#" class="list-group-item list-group-item-action border-0 ">
                                <img src={Union} alt="" />
                                <span>Notification and Sounds</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 ">
                                <img src={Lock} alt="" />
                                <span>Privacy and Security</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 ">
                                <img src={ChartStatus} alt="" />
                                <span>Data and Storage</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 ">
                                <img src={ChatLogo} alt="" />
                                <span>Chat Settings</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 ">
                                <img src={DeviceLogo} alt="" />
                                <span>Devices</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action border-0 ">
                                <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
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
                                    onChange=""
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
                                    <img className="images" src={Yennefer} alt="" />

                                    <div className="profile-btn">
                                        <input id="upload" type="file" onChange="" />
                                        <label className="button" for="upload">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                                <div className="form">
                                <h4>Edit Profile</h4>
                                <Inputfield
                                    className="input-field"
                                    label="Name"
                                    onChange=""
                                    type="text"
                                    name="name"
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Username"
                                    onChange=""
                                    type="text"
                                    name="username"
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Bio"
                                    onChange=""
                                    type="text"
                                    name="status_bio"
                                />
                                <Inputfield
                                    className="input-field"
                                    label="Email"
                                    onChange=""
                                    type="email"
                                    name="email"
                                />
                                </div>
                                <div className="container">

                                <div className="row">
                                    <div className="col">
                                        <Button className="button" color="primary">Save Changes</Button>
                                    </div>
                                    <div className="col">
                                        <Button className="button" color="outer-primary" onClick={()=>{setShowForm(!showForm)}}>Cancel</Button>
                                    </div>
                                </div>
                                </div>
                        </div>
                        : null}
                </div>
            </div>
        </Styles>
    )
}

export default Profile
const Styles = styled.div`
.sidebar{
    width: 100%;
    height: 100vh;
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
            text-align: center;
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
            }
            h5{
                font-family: 'Rubik';
                font-size: 19px;
                line-height: 23px;
                color: #232323;
            }
            .username{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 19px;
                color: #848484;
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
            }
            label{
                font-family: 'Rubik';
                font-style: normal;
                font-size: 16px;
                line-height: 19px;
                color: #848484;
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
                    span{
                        padding-left: 30px;
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
    width: 700px;
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 30px;
    padding-left: 70px;
    padding-right: 70px;
    margin-left: auto;
    margin-right: auto;
    height: 690px;
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
        width: 250px;
        height: 45px;
    }
}
    `
