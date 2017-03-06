import { createStore, combineReducers } from 'redux'
import { pages } from '../reducers/pages'
import { title } from '../reducers/title'

export const store = createStore(combineReducers({ title, pages }))
