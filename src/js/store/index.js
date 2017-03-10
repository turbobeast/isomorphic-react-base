import { createStore, combineReducers, applyMiddleware } from 'redux'
import { pages } from '../reducers/pages'
import { title } from '../reducers/title'
import { posts } from '../reducers/posts'
import thunk from 'redux-thunk'

let initialState

try {
  initialState = window.__GLOBAL_INITIAL_STATE__
  delete window.__GLOBAL_INITIAL_STATE__
} catch (_) {
  initialState = undefined
}

export const store = createStore(
  combineReducers({ title, pages, posts }),
  initialState,
  applyMiddleware(thunk))
