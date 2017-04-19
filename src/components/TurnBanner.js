import React from 'react'

const style = {
    display: 'inline-block',
    lineHeight: '2em',
    textAlign: 'center'
}

function TurnBanner(props) {
    return <div style={style}>It is {props.emoji}s turn </div>
}

export default TurnBanner 
