import React from 'react'
import styled from 'styled-components'

const ProfileImage = ({className, src}) => {
    return (
        <Styles >
            <img className={className} src={src} alt="" />
        </Styles>
    )
}

export default ProfileImage
const Styles = styled.div`
img{
    border-radius: 30px;
    height: 100%;
    width: 100%;
}


`