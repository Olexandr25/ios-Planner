import React from 'react'
import { Body } from "./Text.styled"

const Text = (props) => {
    const { fs, fw, color } = props
    return (
        <>
            <Body fs={fs} fw={fw} color={color}>
                {props.children}
            </Body>
        </>
    )
}

export default Text
