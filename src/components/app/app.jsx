import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {

  state = {
    comments: [
      { username: 'zhangsan', content: '搭好打火锅' },
      { username: '李四', content: '大港撒干哈' },
      { username: '王大概', content: '聚隆科技案例是个啥' }
    ]
  }

  addComment = (comment) => {
    const { comments } = this.state
    comments.unshift(comment)
    this.setState({ comments })
  }

  render () {
    const { comments } = this.state

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment} />
          <CommentList comments={comments} />
        </div>
      </div>
    )
  }
}
