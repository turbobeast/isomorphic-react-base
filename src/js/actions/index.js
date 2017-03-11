require('es6-promise').polyfill()
require('isomorphic-fetch')

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts'
export const POSTS_RECEIVED = 'postsreceived'
export const POSTS_REQUESTED = 'postsrequested'

export const PAGES_RECEIVED = 'pagesreceived'

export const getPosts = () => (dispatch, getState) => {
  const state = getState()
  if (state.posts.posts.length) {
    return Promise.resolve(state.posts.posts)
  }

  dispatch({ type: POSTS_REQUESTED })
  return fetch(POSTS_API)
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: POSTS_RECEIVED,
        payload: posts,
      })
      return posts
    })
}
