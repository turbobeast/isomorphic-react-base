import { createStore, combineReducers } from 'redux'
import { pages } from '../reducers/pages'
import { title } from '../reducers/title'

let initialState

try {
  initialState = window.__GLOBAL_INITIAL_STATE__
  delete window.__GLOBAL_INITIAL_STATE__
} catch (_) {
  initialState = undefined
}

export const store = createStore(combineReducers({ title, pages }), initialState)
