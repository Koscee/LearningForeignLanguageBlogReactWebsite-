import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import HomeSearchSection from '../components/home/HomeSearchSection';
import HomeItemsSection from '../components/home/HomeItemsSection';
import { getAllFilteredPosts } from '../actions/postActions';

const HomePage = (props) => {
  const { postItems } = props;

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    props.getAllFilteredPosts();
  }, [getAllFilteredPosts]);

  return (
    <>
      <Helmet>
        <title>Home | Language Learning Blog</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'white',
          minHeight: '100%',
          pb: 3,
        }}
      >
        <HomeSearchSection
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Container maxWidth="lg" style={{ margin: 'auto' }}>
          <Box sx={{ pt: 4 }}>
            <HomeItemsSection postItems={postItems} searchText={searchText} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

HomePage.propTypes = {
  getAllFilteredPosts: PropTypes.func.isRequired,
  postItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  postItems: state.post.posts
});
export default connect(mapStateToProps, { getAllFilteredPosts })(HomePage);
