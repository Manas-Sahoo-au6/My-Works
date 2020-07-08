import React from 'react'

export default function P(props) {
    return (
    <p className={props.className}>{props.children}</p>
    )
}
