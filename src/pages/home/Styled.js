import styled from 'styled-components'

export const HomeStyles = styled.body`
.sidebar{
    width: 100%;
	box-shadow: 8px -8px 10px -6px rgba(0, 0, 0, 0.1);
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
                    @media screen and (min-width: 576px) {
                        font-size: 22px;
                    }
                    @media screen and (min-width: 992px) {
                        font-size: 29px;
                    }
            }
            .toggle-head{
                width: 50px;
                height: 50px;
                outline: none;
                border: none;
                background: transparent;
                    @media screen and (min-width: 576px) {
                       width: 20px;
                    }
                    @media screen and (min-width: 992px) {
                        width: 50px;
                    }
                
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
            
            .search{
                position: relative;
                margin-top: 40px;
                input[type="text"]
                {
                    padding-left: 25px;
                    width: 350px;
                    height: 59px;
                    background: #FAFAFA;
                    border-radius: 15px;
                    box-sizing: border-box;
                    border: none;
                    outline: none;
                        @media screen and (min-width: 576px) {
                            width: 130px;
                        }
                        @media screen and (min-width: 768px) {
                            width: 180px;
                        }
                        @media screen and (min-width: 992px) {
                            width: 280px;
                            height: 59px;
                        }
                        @media screen and (min-width: 1200px) {
                            width: 350px;
                            height: 59px;
                        }
                    ::placeholder{
                        font-family: 'Rubik';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 19px;
                        letter-spacing: -0.165px;
                        color: #848484;
                        @media screen and (min-width: 576px) {
                            font-size: 12px;
                        }
                        @media screen and (min-width: 786px) {
                            font-size: 15px;
                        }
                        @media screen and (min-width: 992px) {
                            font-size: 19px;
                        }
                    }
            
                    }
                    .fa-search
                    {
                        position:absolute;
                        top:22px;
                        left: 10px;
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
                    
                    img{
                        @media screen and (min-width: 576px) {
                            width: 15px;
                         }
                         @media screen and (min-width: 768px) {
                           width: 25px;
                         }
                    }
                }  
      }
      .chat{
        margin-top: 35px;
        overflow-y: auto;
        height: 350px;
        width: 100%;
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
    margin-bottom: 20px;
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
    height: 600px;
    width: 69%;
    position:absolute;
    overflow-y: auto;
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
            @media screen and (min-width: 576px) {
                width: 200px;
                font-size: 13px;
                
            }
            @media screen and (min-width: 768px) {
                width: 250px;
                font-size: 14px;
            }
            @media screen and (min-width: 992px) {
                width: 286px;
            }
                
        }
        .chat-me{
            background: #FFFFFF;
            border-radius: 35px 10px 35px 35px;
            width: 286px;
            padding: 17px 30px;
            color: black;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            @media screen and (min-width: 576px) {
                width: 200px;
                font-size: 13px;
                
            }
                @media screen and (min-width: 768px) {
                    width: 250px;
                    font-size: 14px;
                }
                @media screen and (min-width: 992px) {
                    width: 286px;
                    font-size: 15px;
                }
           
        }
        .time-msg{
                margin-left: auto;
                padding-top: 30px;
                    @media screen and (min-width: 576px) {
                        font-size: 13px;
                        
                    }
                    @media screen and (min-width: 992px) {
                        font-size: 15px;                
                    }
            }
        .me-img{
            margin-left: 20px;
            margin-top: 30px;
            width: 52px;
            height: 52px;
            border-radius: 20px;
            object-fit: cover;
            margin-bottom:35px;   
            background: teal;
             
        }
      
        .time-msg-friend{
            padding-top: 30px;
            padding-left: 20px;
                @media screen and (min-width: 576px) {
                    font-size: 13px;                
                }
                @media screen and (min-width: 992px) {
                    font-size: 15px;                
                }
        }
    }  
}
.input-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: pink; */
    position: absolute;
    width: 100%;
    padding: 0px 50px;
    position: relative;
    top: 600px;
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
                @media screen and (min-width: 576px) {
                    font-size: 13px;                
                }
                @media screen and (min-width: 992px) {
                    font-size: 15px;                
                }
        }
      }
      .action-button-wrapper {
        display: flex;
        gap: 22px;
            .send-btn{
                display: none;
            }
            .icon img{
                @media screen and (min-width: 576px) {
                    width: 15px;                
                }
                @media screen and (min-width: 768px) {
                    width: 20px;                 
                }
                @media screen and (min-width: 992px) {
                    width: 25px;                
                }
            }
      }
    }
  }
}
.default-message{
    color: #acacac;
    font-size: 20px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #848484;
    text-align: center;
    margin-top: 300px;
        @media screen and (min-width: 576px) {
            font-size: 20px;
        }
        @media screen and (min-width: 768px) {
            font-size: 22px;
        }
        @media screen and (min-width: 992px) {
            font-size: 24px;
        }

}

`