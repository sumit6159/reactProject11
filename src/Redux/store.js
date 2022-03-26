
import {createStore} from 'redux'

import { reducer } from './reducer'
const initialState = {
    todo : [],
}
export const store = createStore(reducer, initialState)