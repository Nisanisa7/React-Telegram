import React from 'react'
import styled from 'styled-components'

const Sidebar = ({children, className}) => {
    return (
        <Styles className={className}>

                {children}

        </Styles>
    )
}

export default Sidebar
const Styles = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;



`
