import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { SuccessGif } from '../../assets'
import { Button } from '../../components/atoms'

const EmailVerif = () => {
    const history = useHistory()

    const toLogin = () =>{
        history.push('/login')
    }
    useEffect(() => {
        document.title = 'Telegram | Success';
        document.body.style.backgroundColor = "#E5E5E5";
    });
    return (
        <Styles>
            <div className="inner-wrap">
        
                <h1>
                    Congratulation !  <br />  
                    Your account has been 
                    successfully <br /> activated             
                </h1>
        
                <div className="centerImage">
                    <img src={SuccessGif} alt=""/>
                </div>
        
                <div className="text">
                Now you can enjoy all the features of Telegram.<br/>
                Click the button below to start chattin with your friends
                </div>
           
                    <Button color="primary" name="" id="" className="Btn" onClick={toLogin}>Back to Login</Button>
        
                </div>
                <div className="footer"></div>
        </Styles>
    )
}

export default EmailVerif
const Styles = styled.div`
width: 600px;
height: 707px;
background: #FFFFFF; 
padding-top: 40px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
border-radius: 20px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));  
.inner-wrap{
    padding-left: 70px;
    padding-right: 70px;
    h1{
        margin-top: 35px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #7E98DF;
        }
    .centerImage{
        margin-top: 4px;
            img{
                height: 315px;
                width: 450px;
            }
    }
    .text{
        margin-top: 39px;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #46505C;
        }
    .Btn{
        width: 204px;
        height: 36px;
        margin-top: 28px;
        cursor: pointer;
        margin-left: 28%;
        margin-right: 28%;
    }
    
}


`