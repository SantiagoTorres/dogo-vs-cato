import {createStore} from 'redux'
import {tictactoe} from './reducers'

export default createStore(
    tictactoe,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
