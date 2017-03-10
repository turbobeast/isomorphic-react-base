import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class Projects extends Component {
  componentWillMount () {
    this.props.getPosts()
  }

  render () {
    return (
      <section>
        <h2>projects are very difficult</h2>
        <ul>
          {this.props.posts && this.props.posts.map((post) => <li key={post.id}>{post.body}</li>)}
        </ul>
      </section>
    )
  }
}

export default connect(
  ({ posts }) => ({ posts: posts.posts }),
  (dispatch) => ({
    getPosts: () => dispatch(getPosts())
  }))(Projects)

