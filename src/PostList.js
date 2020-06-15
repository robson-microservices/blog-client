import React, { useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  makeStyles,
  CardHeader,
  CardActions,
  Paper,
} from '@material-ui/core'
import CommentList from './CommentList'
import CommentCreate from './CommentCreate'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    height: '100%',
  },
  commentForm: {
    flexGrow: 2,
  },
  content: {
    // padding: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    minHeight: 110,
  },
  column: {
    marginTop: theme.spacing(2),
  },
}))

const PostList = () => {
  const classes = useStyles()
  const [posts, setPosts] = useState({})

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4002/posts')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  const renderPosts = () =>
    Object.values(posts).map((post) => (
      <Grid key={post.id} item xs={12} sm={6} md={4}>
        <Card className={classes.card} variant="elevation">
          <CardHeader title={post.title} />
          <CardActions disableSpacing>
            <CommentCreate postId={post.id} />
          </CardActions>
          <CardContent>
            <CommentList comments={post.comments} />
          </CardContent>
        </Card>
      </Grid>
    ))

  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h4">
        Posts
      </Typography>
      {/* Um grid container pode conterm grid items */}
      <Grid container className={classes.column} spacing={3} direction="column">
        {/* Cada item pode ocupar entre 1 e 12 colunas */}
        <Grid item xs={12} container spacing={2}>
          {renderPosts()}
        </Grid>
      </Grid>
    </Container>
  )
}

export default PostList
