// import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, makeStyles,
  Box, Container
} from '@material-ui/core';
import AuthorInfo from './AuthorInfo';
import CommentForm from './CommentForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  comments: {
    margin: '45px auto 50px',
    width: '75%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  }
}));

const CommentSection = (props) => {
  const classes = useStyles();
  const { comments } = props;

  return (
    <Box sx={{ pt: 4 }}>
      <Grid container className={classes.root}>
        <Grid item>
          <CommentForm />
        </Grid>
        <Container className={classes.comments}>
          {
            comments.map((comment) => (
              <Box key={comment.id} sx={{ marginTop: 4 }}>
                <AuthorInfo
                  authorName={comment.name}
                  authorProfilePic={comment.avatarUrl}
                  publishedDate="Feb 6th, 2021"
                  isComment
                  comment={comment.body}
                />
              </Box>
            ))
        }
        </Container>

      </Grid>
    </Box>

  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
