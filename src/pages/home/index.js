
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultAvatar, Emoticon, FileLogo, Plus, ProfileMenu } from '../../assets'
import { Button } from '../../components/atoms'
import CardChat from '../../components/atoms/cardChat'
import Sidebar from '../../components/atoms/sidebar'
import { toastify } from '../../utils';
import { HomeStyles } from './Styled'
import moment from 'moment'
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSelector } from 'react-redux';

const Home = ({ socket }) => {
    const dataUser = useSelector(state => state.user.profile.data)
    const [friends, setFriends] = useState([])
    const [showFriend, setShowFriend] = useState(null)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [search, setSearch] = useState("")
    const username = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');
 
    useEffect(() => {
        document.title = 'Telegram | Home';
    });

    useEffect(() => {
        if (socket && showFriend) {
            socket.off('sendChatFromBackend')
            socket.on('sendChatFromBackend', (data) => {
                if (data.sender_id === showFriend.idUser) {
                    (setMessages((currentValue) => [...currentValue, data]))

                } else {
                    
                    toastify(`${data.sender_id} : ${data.message}`, "info")                  
                }
            })
        }
    }, [socket, showFriend])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((result) => {
                const friendResult = result.data.item
                console.log(friendResult, 'result frienmdds');
                setFriends(friendResult)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        if (showFriend) {
            axios.get(`${process.env.REACT_APP_BACKEND_API}/messages/${showFriend.idUser}`, {
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
            socket.emit('sendChat', {
                idReceiver: showFriend.idUser,
                messageBody: message
            }, (data) => {
                setMessages((currentValue) => [...currentValue, data])
            })
            setMessage('')
        }
    }
    console.log(messages, 'data mesage');

    return (
        <HomeStyles>
            <div className="row g-0">
                <div className="col col-4">
                    <Sidebar className="sidebar">
                        <div className="logo-header">
                            <div className="logo" onClick="">
                                Telegram
                            </div>
                            <button className="toggle-head" onClick="" >
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
                                    <img src={dataUser.avatar ? dataUser.avatar : DefaultAvatar} alt="" className="avatar" />
                                </div>
                            </Link>
                            <div className="display-name">
                                {dataUser.name}
                            </div>
                            <div className="username">
                                @{username}
                            </div>
                        </div>
                        <div className="search-section">
                            <div className="search">
                                <i className="fa fa-search fa-1x"></i>
                                <input type="text" className="searchTerm" name="" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" />
                            </div>
                            <button>
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className="chat">
                            {friends.filter((friend)=>{
                                if(search === ""){
                                    return friend
                                } else if(friend.name.toLowerCase().includes(search.toLocaleLowerCase())){
                                    return friend
                                }
                            }).map((friend) => (
                                <CardChat key={friend.idUser} onClick={() => setShowFriend(friend)} className="chat-card" avatar={friend.avatar ? friend.avatar : DefaultAvatar} username={friend.name ? friend.name : friend.username ? friend.username : 'Anonymous'} />
                            ))}
                            <ToastContainer />
                        </div>
                    </Sidebar>
                </div>
                <div className="col col-8">
                {showFriend ?
                        <div className="second-wrapper">
                            <header>
                                <div className="profile-picture">
                                    <img src={showFriend.avatar ? showFriend.avatar : DefaultAvatar} alt="" />
                                </div>
                                <div className="user-profile">
                                    <div className="text-heading">{showFriend.name}</div>
                                    <p className="text">{showFriend.status_bio}</p>
                                </div>
                                <div className="toggle-button">
                                    <Button className="btn" color="transparant">
                                        <img src={ProfileMenu} alt="" />
                                    </Button>
                                </div>
                            </header>
                            <ScrollToBottom className="chat-section">
                                    {messages.map((item) =>
                                        <>
                                            <div className={`chat friends ${showFriend.idUser === item.receiver_id ? 'me' : ''}`}>
                                                {showFriend.idUser === item.receiver_id ? <p className="time-msg">{moment(item.createdAt).format("LT")}</p> : ''}
                                                {showFriend.idUser !== item.receiver_id ? <img src={showFriend.avatar ? showFriend.avatar : DefaultAvatar} className="img" alt="" /> : ''}
                                                <p className={`chat-text ${showFriend.idUser === item.receiver_id ? 'chat-me' : ''}`}>{item.message}</p>
                                                {showFriend.idUser !== item.receiver_id ? <p className="time-msg-friend">{moment(item.createdAt).format("LT")}</p> : ''}
                                                {showFriend.idUser === item.receiver_id ? <img src={avatar} className="me-img" alt="" /> : ''}
                                            </div>
                                        </>
                                    )}
                            </ScrollToBottom>
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
                    : <div className="default-message">Please select a contact to start messaging</div>}
                </div>
            </div>
            
        </HomeStyles>
    )
}

export default Home
