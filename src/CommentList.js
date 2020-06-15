import React from 'react'

const CommentList = ({ comments }) => {
  const renderComment = (comment) => {
    let content = ''
    switch (comment.status) {
      case 'pedning':
        content = 'Waiting for moderation'
        break
      case 'rejected':
        content = 'Comment rejected'
        break
      default:
        content = comment.content
        break
    }
    return <li key={comment.id}>{content}</li>
  }

  return (
    <ul>{Object.values(comments).map((comment) => renderComment(comment))}</ul>
  )
}

export default CommentList
