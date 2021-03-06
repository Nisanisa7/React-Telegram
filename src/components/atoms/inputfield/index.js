import { TextField } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Inputfield = ({className, label, name, value, onChange, type, error}) => {
    return (
        <Styles className={className}>
            <TextField
            className="input"
            id="standard-basic"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            error={error}/>
        </Styles>
    )
}

export default Inputfield
const Styles = styled.div`
.input{
    width: 100%;
}
`