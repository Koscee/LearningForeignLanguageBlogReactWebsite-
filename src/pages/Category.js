import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CategorySearch from 'src/components/category/CategorySearch';
import { useNavigate, useParams } from 'react-router';
import MainGridLayout from '../components/gridLayouts/MainGridLayout';
import { getCategoryByName } from '../actions/categoryAction';

const Category = (props) => {
  const { category } = props;
  const navigate = useNavigate();
  const { name } = useParams();

  const [searchText, setSearchText] = useState('');
  const [postList, setPostList] = useState([]);

  const mountedRef = useRef(true);

  async function populatePosts() {
    setPostList(category.posts);
  }

  useEffect(() => {
    (async () => {
      await props.getCategoryByName(name, navigate);
      await populatePosts();
    })();
    return () => {
      mountedRef.current = false;
    };
  }, [category.id, name]);

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
            <CategorySearch
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </Box>
        </Container>
        <Container maxWidth="lg" style={{ margin: 'auto' }}>
          <Box sx={{ pt: 3 }}>
            <MainGridLayout postItems={postList} searchText={searchText} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Category.propTypes = {
  getCategoryByName: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  // searchText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category.category
});
export default connect(mapStateToProps, { getCategoryByName })(Category);
