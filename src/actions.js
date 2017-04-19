
export const TAKE_TURN = 'TAKE_TURN'
export const RESET_BOARD = 'RESET_BOARD'

export function resetBoard() {
    return {
        type: RESET_BOARD
    }
}

export function takeTurn(index) {
    return {
        type: TAKE_TURN,
        index
    }
}

