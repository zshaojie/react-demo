import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  handleDelete = () => {
    this.props.deleteComment(this.props.index)
  }

  render () {
    const { comment } = this.props

    return (
      <li className="list-group-item">
        <div className="handle">
          <div onClick={this.handleDelete}>删除</div>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}
