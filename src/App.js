import React from 'react'
import {
  ThemeProvider,
  Grid,
  CssBaseline,
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Divider,
} from '@material-ui/core'

import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import PostCreate from './PostCreate'
import PostList from './PostList'

const useStyles = makeStyles((theme) => ({
  gridContent: {
    marginTop: theme.spacing(5),
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                Posts
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item container direction="column" justify="space-between">
          <Grid item>
            <PostCreate />
          </Grid>
          <Grid item container justify="center">
            <Grid item xs={7}>
              <Divider light />
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <PostList />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default App
