import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import MainGridLayout from '../gridLayouts/MainGridLayout';
// import { getAllFilteredPosts } from '../../actions/postActions';

const HomeItemsSection = (props) => {
  const { postItems, searchText } = props;

  return (
    <MainGridLayout postItems={postItems} searchText={searchText} />
  );
};

HomeItemsSection.propTypes = {
  // getAllFilteredPosts: PropTypes.func.isRequired,
  postItems: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default HomeItemsSection;
