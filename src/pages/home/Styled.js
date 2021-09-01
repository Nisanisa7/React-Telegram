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
                    width: 300px;
                    height: 59px;
                    background: #FAFAFA;
                    border-radius: 15px;
                    box-sizing: border-box;
                    border: none;
                    outline: none;
                    ::placeholder{
                        font-family: 'Rubik';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 19px;
                        letter-spacing: -0.165px;
                        color: #848484;
                    }
            
                    }
                    .fa-search
                    {
                        position:absolute;
                        top:22px;
                        left: 5px;
                        color:#848484;
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





`