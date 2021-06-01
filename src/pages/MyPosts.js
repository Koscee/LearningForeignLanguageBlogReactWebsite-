import React, { useEffect, useState } from 'react';
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
import SnackBarAlert from 'src/components/SnacKBarAlert';
import { getUserPosts } from '../actions/postActions';
// import posts from 'src/__mocks__/posts';

// All the posts of a particular user

const MyPosts = (props) => {
  const { alert, postItems } = props;
  const [searchText, setSearchText] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    props.getUserPosts();
  }, [getUserPosts]);

  useEffect(() => {
    if (alert.message !== '') setAlertOpen(true);
  }, [alert]);

  return (
    <>
      <Helmet>
        <title>Posts | Language Learning Blog</title>
      </Helmet>

      {
        alert && (
          <SnackBarAlert
            severity={alert.type}
            alertOpen={alertOpen}
            setAlertOpen={setAlertOpen}
            message={alert.message}
          />
        )
        }
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <PostListToolbar
            showAddButton={!false}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Box sx={{ pt: 8, px: 2 }}>
            <Grid
              container
              spacing={5}
            >
              {
                postItems && (postItems.posts.length > 0
                  ? postItems.posts.map((post) => (
                    (post.title.toLowerCase().includes(searchText.toLowerCase())
                    || post.description.toLowerCase().includes(searchText.toLowerCase()))
                    && (
                    <Grid
                      item
                      key={post.id}
                      lg={6}
                      md={6}
                      xs={12}
                    >
                      <PostCard post={post} />
                    </Grid>
                    )
                  ))
                  : null
                )
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

MyPosts.propTypes = {
  getUserPosts: PropTypes.func.isRequired,
  postItems: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  postItems: state.post,
  alert: state.alert
});

export default connect(mapStateToProps, { getUserPosts })(MyPosts);
