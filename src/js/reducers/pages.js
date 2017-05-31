// @flow
import * as actions from '../actions'

const defaultState = [
  { key: 'about', title: 'About', path: '/About' },
  { key: 'contact', title: 'Contact', path: '/Contact' },
  { key: 'projects', title: 'Projects', path: '/Projects' },
]

export const pages = (state: Array<Object> = defaultState, action: Object) => {
  switch (action.type) {
    case actions.PAGES_RECEIVED:
      return [...state, action.payload]
    default:
      return state
  }
}
