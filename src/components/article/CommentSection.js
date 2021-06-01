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
  container: {
    margin: '45px auto 50px',
    width: '75%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  }
}));

const CommentSection = ({ postId, comments }) => {
  const classes = useStyles();

  return (
    <Box sx={{ pt: 4 }}>
      <Grid container className={classes.root}>
        <Grid item>
          <CommentForm postId={postId} />
        </Grid>
        <Container className={classes.container}>
          {
            comments ? comments.map((comment) => (
              <Box key={comment.id} sx={{ marginTop: 4 }}>
                <AuthorInfo
                  authorName={comment.userName}
                  authorProfilePic={comment.userAvatar}
                  publishedDate={comment.created_At}
                  isComment
                  comment={comment.content}
                />
              </Box>
            ))
              : null
        }
        </Container>

      </Grid>
    </Box>

  );
};

CommentSection.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.string,
};

export default CommentSection;
