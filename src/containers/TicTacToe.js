import React, {Component} from 'react'
import Board from "../components/Board"
import {connect} from 'react-redux'
import {
    resetBoard,
    takeTurn,
} from '../actions'


class TicTacToe extends Component {

    constructor() {
        super();
        this.click = this.click.bind(this)
    }
    render() {
        console.log(this.props);
        return (
            <Board click_handler={this.click} text={this.props.text} turn={this.props.turn} squares={this.props.squares} />
        )
    }

    click(index) {
        const {
            turn,
            squares,
            dispatch
        } = this.props
        dispatch(takeTurn(index));
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(TicTacToe)
