import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CategorySearch from 'src/components/category/CategorySearch';
// import postItems from '../__mocks__/posts';
import MainGridLayout from '../components/gridLayouts/MainGridLayout';
import { getPosts } from '../actions/postActions';

const Category = (props) => {
  const { postItems } = props;

  useEffect(() => {
    props.getPosts();
  }, [postItems]);

  return (
    <>
      <Helmet>
        <title>Category | Language Learning Blog</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ my: 5 }}>
            <CategorySearch />
          </Box>
        </Container>
        <Container maxWidth="lg" style={{ margin: 'auto' }}>
          <Box sx={{ pt: 3 }}>
            <MainGridLayout postItems={postItems.posts} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Category.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postItems: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  postItems: state.post
});
export default connect(mapStateToProps, { getPosts })(Category);
