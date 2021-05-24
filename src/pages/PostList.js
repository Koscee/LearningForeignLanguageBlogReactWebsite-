import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Pagination
} from '@material-ui/core';
import PostListToolbar from 'src/components/posts/PostListToolbar';
import PostCard from 'src/components/posts/PostCard';
import { getPosts } from '../actions/postActions';
// import posts from 'src/__mocks__/posts';

const PostList = (props) => {
  const { postItems } = props;

  useEffect(() => {
    props.getPosts();
  }, [postItems]);

  return (
    <>
      <Helmet>
        <title>Posts | Language Learning Blog</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <PostListToolbar />
          <Box sx={{ pt: 8, px: 2 }}>
            <Grid
              container
              spacing={5}
            >
              {
                postItems.posts.length > 0
                  ? postItems.posts.map((post) => (
                    <Grid
                      item
                      key={post.id}
                      lg={6}
                      md={6}
                      xs={12}
                    >
                      <PostCard post={post} />
                    </Grid>
                  ))
                  : null
              }
            </Grid>
          </Box>
          {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}
        </Container>
      </Box>
    </>
  );
};

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postItems: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  postItems: state.post
});

export default connect(mapStateToProps, { getPosts })(PostList);
