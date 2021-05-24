import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainGridLayout from '../gridLayouts/MainGridLayout';
// import postItems from '../../__mocks__/posts';
import { getPosts } from '../../actions/postActions';

const HomeItemsSection = (props) => {
  const { postItems } = props;

  useEffect(() => {
    props.getPosts();
  }, [getPosts]);

  return (
    <MainGridLayout postItems={postItems.posts} />
  );
};

HomeItemsSection.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postItems: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  postItems: state.post
});
export default connect(mapStateToProps, { getPosts })(HomeItemsSection);
