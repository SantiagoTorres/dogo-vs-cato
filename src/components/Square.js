import React from 'react'

const style = {
    display: 'inline-block',
    border: '1px solid #282828',
    width: '2em',
    lineHeight: '2em',
    textAlign: 'center'
}

function Square(props) {
    return <div style={style} onClick={props.onClick}>{props.emoji}</div>
}

export default Square
