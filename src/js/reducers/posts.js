import * as actions from '../actions'
import { v4 } from 'node-uuid'

const defaultState = {
  pending: false,
  posts: [],
}

export const posts = (state = defaultState, action) => {
  switch (action.type) {
    case actions.POSTS_REQUESTED:
      return Object.assign({}, state, { pending: true })
    case actions.POSTS_RECEIVED:
      return Object.assign({}, state, { pending: false }, {
        posts: [...action.payload.map((post) => Object.assign({}, post, { id: v4() }))],
      })
    default:
      return state
  }
}
