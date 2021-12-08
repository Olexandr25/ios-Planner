import React from 'react'
import { Body } from "./Title.styled"


const Title = (props) => {
    const { fs, fw, color } = props
    return (
        <>
            <Body fs={fs} fw={fw} color={color}>
                {props.children}
            </Body>
        </>
    )
}

export default Title
