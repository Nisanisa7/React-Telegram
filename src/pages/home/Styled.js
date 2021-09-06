import styled from 'styled-components'

export const HomeStyles = styled.body`
.sidebar{
    width: 100%;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.1) 5px 0 5px -5px;
    padding: 0 30px;
    .logo-header{
            padding-top: 43px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            .logo{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 500;
                font-size: 29px;
                line-height: 34px;
                text-align: center;
                letter-spacing: -0.165px;
                padding-top: 10px;
                color: #7E98DF;
            }
            .toggle-head{
                width: 50px;
                height: 50px;
                outline: none;
                border: none;
                background: transparent;
                .menu-toggle{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 20px;
                }
                .menu-toggle span{
                    display: block;
                    height: 3.3px;
                    background: #7E98DF;
                    border-radius: 20px;
                }
                .span1{
                    width: 22px;
                }
                .span2{
                    width: 13.2px;
                }
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
            .username{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 19px;
                color: #848484;
                letter-spacing: 1.335px;
            }
        }
        .search-section{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1rem;
            .search{
                position: relative;
                margin-top: 40px;
                input[type="text"]
                {
                    padding-left: 25px;
                    width: 250px;
                    height: 59px;
                    background: #FAFAFA;
                    border-radius: 15px;
                    box-sizing: border-box;
                    border: none;
                    outline: none;
                    @media screen and (max-width: 992px) {
                            width: 120px;
                    }
                    ::placeholder{
                        font-family: 'Rubik';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 19px;
                        letter-spacing: -0.165px;
                        color: #848484;
                        @media screen and (max-width: 992px) {
                            font-size: 11px;
                    }
                    }
            
                    }
                    .fa-search
                    {
                        position:absolute;
                        top:22px;
                        left: 5px;
                        color:#848484;
                        @media screen and (max-width: 992px) {
                            width: 2px;
                            }
                    }
                }
                button{
                    margin-top: 50px;
                    height: 40px;
                    border: none;
                    outline: none;
                    background: none;
                }  
      }
      .chat{
          margin-top: 35px;
          .chat-card{
            margin-bottom: 25px;
          }
      }
}
.second-wrapper{

height: 100vh;
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
    height: 500px;
    /* background: black; */
    width: 800px;
    position:absolute;
    
.chat-wrapper{
    overflow-y: auto;
    width: 800px;
    
    .chat {
      display: flex;
      
        .img{
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
            margin-top: 10px;
            width: 286px;
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
            margin-left: auto;
            margin-right: 20px;
            width: 286px;
            padding: 17px 30px;
            color: black;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
        }
        .me-img{
            margin-left: auto;
            margin-top: 30px;
            width: 52px;
            height: 52px;
            border-radius: 20px;
            object-fit: cover;
            margin-bottom:35px;   
            background: teal;
        }
        .time-msg{
            margin-left: 200px;
            padding-top: 30px;
        }
        .time-msg-friend{
            padding-top: 30px;
            padding-left: 20px;
        }
    }  
    }
}
.input-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    position: absolute;
    width: 100%;
    padding: 0px 50px;
    position: relative;
    top: 500px;
    .input-wrapper {
      padding: 21px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fafafa;
      border-radius: 15px;
      input {
        border: 0;
        width: 100%;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #848484;
        background-color: transparent;
        &:focus {
          outline: none;
        }
      }
      .action-button-wrapper {
        display: flex;
        gap: 22px;
            .send-btn{
                display: none;
            }
      }
    }
  }

}


`