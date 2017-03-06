import * as actions from '../actions'

const defaultState = [
  { key: 'about', title: 'About' },
  { key: 'contact', title: 'Contact' },
  { key: 'projects', title: 'Projects' },
]

export const pages = (state = defaultState, action) => {
  switch (action.type) {
    case actions.RECEIVED_PAGES:
      return [...state, action.payload]
    default:
      return state
  }
}
