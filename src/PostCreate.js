import React, { useState } from 'react'
import {
  TextField,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const PostCreate = () => {
  const [content, setContent] = useState('')
  const classes = useStyles()

  const createPost = async (event) => {
    event.preventDefault()
    const res = await axios.post(
      'http://posts.com/posts/create',
      { title: content },
      { headers: { 'content-type': 'application/json' } }
    )
    console.log(res.data)
    setContent('')
  }

  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h4">
        Create Post
      </Typography>
      <form onSubmit={(e) => createPost(e)} className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content"
          label="Content"
          name="content"
          autoComplete="content"
          autoFocus
        />
        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default PostCreate
