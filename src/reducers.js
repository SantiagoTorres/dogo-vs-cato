import {
    TAKE_TURN,
    RESET_BOARD,
} from './actions'

export const DOGO = '🐕'
export const CATO = '🐈'
export const BLANK = '\u200b'

const defaultState = { 
    squares: Array(9).fill(BLANK),
    turn: DOGO,
    victor: null,
}

export function checkWinner(squares) {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const winner = wins.map(([a, b, c]) => 
        (squares[a] == squares[b] && squares[b] == squares [c] && squares[a]
        )).filter(Boolean)[0]

    return winner == BLANK ? false : winner

}

export function tictactoe(state = defaultState, action) {
    const squares = [... state.squares]
        switch (action.type) {
            case TAKE_TURN:
                squares[action.index] = state.turn;
                return {
                    ...state,
                    squares: squares,
                    turn: state.turn == DOGO ? CATO : DOGO,
                    winner: checkWinner(squares)
                }
            case RESET_BOARD:
                return {
                    ... defaultState
                }
            default:
                return state
        }
}
