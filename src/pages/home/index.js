
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Girl, Plus, Yennefer } from '../../assets'
import { Button } from '../../components/atoms'
import CardChat from '../../components/atoms/cardChat'
import Sidebar from '../../components/atoms/sidebar'
import { Chatroom, ModalWindow, OpenModal, UseModal } from '../../components/molecules'
import ModalMenu from '../../components/molecules/modalMenu'
import { HomeStyles } from './Styled'


const Home = () => {
    const { toggle, visible } = UseModal();
    const { handleOpen, show } = OpenModal();

    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const avatar = localStorage.getItem('avatar');
    useEffect(() => {
        document.title = 'Telegram | Home';
    });
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
                                <img src={Yennefer} alt="" className="avatar" />
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
                            <div class="search">
                                <i class="fa fa-search fa-1x"></i>
                                <input type="text" class="searchTerm" name="" placeholder="Type your message" />
                            </div>
                            <button>
                                <img src={Plus} alt="" />
                            </button>
                        </div>
                        <div className="chat">
                            <CardChat className="chat-card" avatar={Girl} time="20.00 PM" username="Pochita" preview="You DUMBBB" />
                            <CardChat className="chat-card" avatar={Girl} time="20.00 PM" username="Pochita" preview="You DUMBBB" />
                            <CardChat className="chat-card" avatar={Girl} time="20.00 PM" username="Pochita" preview="You DUMBBB" />
                        </div>
                    </Sidebar>
                </div>
                <div className="col col-8">
                    <Chatroom />

                </div>
            </div>
            <ModalWindow show={show} handleOpen={handleOpen} />
            <ModalMenu visible={visible} toggle={toggle} />
        </HomeStyles>
    )
}

export default Home
