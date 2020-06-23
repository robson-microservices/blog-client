import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import axios from 'axios'

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('')

  const createComment = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      `http://posts.com/posts/${postId}/comments`,
      { content },
      { headers: { 'content-type': 'application/json' } }
    )
    const comments = res.data
    console.log(comments)
    setContent('')
  }

  return (
    <form onSubmit={(e) => createComment(e)}>
      <TextField
        variant="standard"
        margin="normal"
        size="small"
        required
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        id="content"
        label="New comment"
        name="content"
        autoComplete="content"
      />
    </form>
  )
}

export default CommentCreate
