import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { DefaultAvatar, ProfileMenu } from '../../../assets';
import { Button } from '../../atoms';

const Chatroom = ({ avatar }) => {
    return (
        <Styles>
            <header>
                <div className="profile-picture">
                    <img src={avatar} alt="" />
                </div>
                <div className="user-profile">
                    <div className="text-heading">Username</div>
                    <p className="text">Status</p>
                </div>
                <div className="toggle-button">
                    <Button className="btn" color="transparant">
                        <img src={ProfileMenu} alt="" />
                    </Button>
                </div>
            </header>
            <div className="chat-section">
                <div className="chat friends">
                    <img src={avatar} alt="" />
                    <p className="chat-text">Ayonimaa</p>
                </div>
                <div className="chat me">
                    <p className="chat-me">Ayonimaa</p>
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className="input-section">
                hi
            </div>
        </Styles>
    )
}

Chatroom.defaultProps = {
    avatar: DefaultAvatar,
};

export default Chatroom
const Styles = styled.div`
header{
    width: 100%;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    display: flex;
    flex-direction: row;
    padding:  30px 50px;
    .profile-picture{
          img{
                width: 64px;
                height: 64px;
                border-radius: 30px;
                object-fit: cover;
                object-position: center right;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom:35px;   
          }
    }
        .user-profile{
            margin-left: 20px;
            .text-heading{
                padding-top: 15px;
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                color: #232323;
            }
            .text{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                padding-top: 7px;
                font-size: 15px;
                line-height: 18px;
                color: #7E98DF;
            }
        }
        .toggle-button{
            margin-left: auto;
            .btn{
                width: 64px;
                height: 64px;
            }
        }
}
.chat-section{
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    padding-bottom: 150px;
    overflow-y: auto;    
    height: 500px;                                

    .chat {
      display: flex;
      
        img{
            margin-top: 30px;
            width: 52px;
            height: 52px;
            border-radius: 20px;
            object-fit: cover;
            display: block;
            margin-bottom:35px;   
            background: teal;
        }
        .chat-text{
            margin-left: 20px;
            width: 50%;
            background: #7e98df;
            padding: 17px 30px;
            border-radius: 35px 35px 35px 10px;
            color: #ffffff;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
        }
        .chat-me{
            background: #FFFFFF;
            border-radius: 35px 10px 35px 35px;
            margin-left: 20px;
            width: 50%;
            padding: 17px 30px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
        }
    }
    .me{
        img{

            margin-left: 20px;
        }
    }
    
}
.input-section{
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 2px;
    display: flex;
    flex-direction: row;
    padding:  30px 50px;
    
}

`
