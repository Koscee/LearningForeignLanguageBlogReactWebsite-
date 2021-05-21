import React from 'react';
import MainGridLayout from '../gridLayouts/MainGridLayout';
// import postItems from '../../__mocks__/posts';
import postItems from '../../__mocks__/posts';

const HomeItemsSection = () => (
  <MainGridLayout postItems={postItems} />
);

export default HomeItemsSection;
