
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Emoticon, FileLogo, Girl, Plus, ProfileMenu, Yennefer } from '../../assets'
import { Button } from '../../components/atoms'
import CardChat from '../../components/atoms/cardChat'
import Sidebar from '../../components/atoms/sidebar'
import { ModalWindow, OpenModal, UseModal } from '../../components/molecules'
import ModalMenu from '../../components/molecules/modalMenu'
import { toastify } from '../../utils';
import { HomeStyles } from './Styled'
import moment from 'moment'
import ScrollToBottom from 'react-scroll-to-bottom';

const Home = ({ socket }) => {
    const { toggle, visible } = UseModal();
    const { handleOpen, show } = OpenModal();
    const [friends, setFriends] = useState([])
    const [showFriend, setShowFriend] = useState(null)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const avatar = localStorage.getItem('avatar');
 
    useEffect(() => {
        document.title = 'Telegram | Home';
    });

    useEffect(() => {
        if (socket && showFriend) {
            socket.off('MsgFromBackend')
            socket.on('MsgFromBackend', (data) => {
                if (data.sender_id === showFriend.idUser) {
                    (setMessages((currentValue) => [...currentValue, data]))

                } else {
                    
                    toastify(`${data.sender_id} : ${data.message}`, "info")
                    
                }
            })
        }
    }, [socket, showFriend])
    //get friend
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((result) => {
                const friendResult = result.data.item
                setFriends(friendResult)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        if (showFriend) {
            // console.log(showFriend.idUser);
            axios.get(`http://localhost:4000/v1/messages/${showFriend.idUser}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((res) => {
                    const resultMsg = res.data.data
                    console.log(resultMsg);
                    setMessages(resultMsg)
                })
        }
    }, [showFriend])
    const handleSendMessage = (e) => {
        if (socket && message) {
            e.preventDefault()
            socket.emit('sendMessage', {
                idReceiver: showFriend.idUser,
                messageBody: message
            }, (data) => {
                setMessages((currentValue) => [...currentValue, data])
            })
            setMessage('')
        }
    }

    return (
        <HomeStyles>
            <div className="row g-0">
                <div className="col col-4">
                    <Sidebar className="sidebar">
                        <div className="logo-header">
                            <div className="logo" onClick={handleOpen}>
                                Telegram
                            </div>
                            <button className="toggle-head" onClick={toggle} >
                                <div className="menu-toggle">
                                    <span className="span1"></span>
                                    <span className="span2"></span>
                                    <span className="span1"></span>
                                </div>
                            </button>
                        </div>
                        <div className="profile">
                            <Link to="/profile">
                                <div className="photo-profile">
                                    <img src={avatar} alt="" className="avatar" />
                                </div>
                            </Link>
                            <div className="display-name">
                                {name}
                            </div>
                            <div className="username">
                                @{username}
                            </div>
                        </div>
                        <div className="search-section">
                            <div className="search">
                                <i className="fa fa-search fa-1x"></i>
                                <input type="text" className="searchTerm" name="" placeholder="Type your message" />
                            </div>
                            <button>
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className="chat">
                            {friends.map((friend) => (
                                <CardChat key={friend.idUser} onClick={() => setShowFriend(friend)} className="chat-card" avatar={friend.avatar} username={friend.name} />
                            ))}
                            <ToastContainer />
                        </div>
                    </Sidebar>
                </div>
                {showFriend && (<>
                    <div className="col col-8">
                        <div className="second-wrapper">
                            <header>
                                <div className="profile-picture">
                                    <img src={showFriend.avatar} alt="" />
                                </div>
                                <div className="user-profile">
                                    <div className="text-heading">{showFriend.name}</div>
                                    <p className="text">Status</p>
                                </div>
                                <div className="toggle-button">
                                    <Button className="btn" color="transparant">
                                        <img src={ProfileMenu} alt="" />
                                    </Button>
                                </div>
                            </header>
                            <div className="chat-section">
                                <ScrollToBottom className="chat-wrapper">
                                    {messages.map((item) =>
                                        <>
                                            <div className={`chat friends ${showFriend.idUser === item.receiver_id ? 'me' : ''}`}>
                                                {showFriend.idUser === item.receiver_id ? <p className="time-msg">{moment(item.createdAt).format("LT")}</p> : ''}
                                                {/* <img src={showFriend.idUser === item.receiver_id ? avatar: '' } alt="" /> */}
                                                {showFriend.idUser !== item.receiver_id ? <img src={showFriend.avatar} className="img" alt="" /> : ''}
                                                <p className={`chat-text ${showFriend.idUser === item.receiver_id ? 'chat-me' : ''}`}>{item.message}</p>
                                                {showFriend.idUser !== item.receiver_id ? <p className="time-msg-friend">{moment(item.createdAt).format("LT")}</p> : ''}
                                                {showFriend.idUser === item.receiver_id ? <img src={avatar} className="me-img" alt="" /> : ''}
                                            </div>
                                        </>
                                    )}
                                </ScrollToBottom>
                            </div>
                            <div className="input-section">
                                <form
                                    onSubmit=""
                                    className="input-wrapper"
                                >
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Type your message.."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className="action-button-wrapper">
                                        <button className="send-btn" onClick={handleSendMessage}>Send</button>
                                        <div className="icon">
                                            <img src={Plus} alt="icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={Emoticon} alt="icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={FileLogo} alt="icon" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            <ModalWindow show={show} handleOpen={handleOpen} />
            <ModalMenu visible={visible} toggle={toggle} />
        </HomeStyles>
    )
}

export default Home
