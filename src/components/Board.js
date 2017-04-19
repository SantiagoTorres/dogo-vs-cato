import React from 'react'
import Square from "./Square"
import TurnBanner from "./TurnBanner"

function Board(props) {
    return (
            <div>
                <div>{props.text}</div>
                {props.squares.map((emoji, i) => 
                    <span>
                     <Square emoji={emoji} onClick={() => props.click_handler(i)}/> 
                     {(i + 1) % 3 ? null : <br />}
                    </span>
                )}
                <TurnBanner emoji={props.turn} />
            </div>
    )
    

}

export default Board
