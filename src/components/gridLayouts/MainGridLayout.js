import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import SimpleCard from '../cards/SimpleCard';
// import CardWithAvatar from '../cards/CardWithAvatar';

const MainGridLayout = (props) => {
  const { postItems, searchText } = props;
  return (
    <Grid container spacing={1}>
      {
        postItems ? postItems.map((postItem) => (
          (postItem.title.toLowerCase().includes(searchText.toLowerCase())
          || postItem.description.toLowerCase().includes(searchText.toLowerCase()))
          && (
          <Grid item lg={4} md={6} sm={12} xs={12} key={postItem.id}>
            <SimpleCard
              href={`/article/${postItem.id}`}
              title={postItem.title}
              image={postItem.coverImage}
              description={postItem.description}
              createdAt={postItem.createdAt}
              imageHeight={220}
            />
          </Grid>
          )
        ))
          : null
    }
    </Grid>
  );
};

MainGridLayout.propTypes = {
  postItems: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default MainGridLayout;
