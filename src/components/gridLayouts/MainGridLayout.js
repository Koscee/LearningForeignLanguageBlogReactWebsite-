import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import SimpleCard from '../cards/SimpleCard';
// import CardWithAvatar from '../cards/CardWithAvatar';

const MainGridLayout = (props) => {
  const { postItems } = props;
  return (
    <Grid container justifyContent="space-between" spacing={1}>
      {
        postItems.length > 0
          ? postItems.map((postItem) => (
            <Grid item lg={4} md={6} sm={12} xs={12} key={postItem.id}>
              <SimpleCard
                href={`/article/${postItem.id}`}
                title={postItem.title}
                image={postItem.coverImage}
                description={postItem.content}
                createdAt={postItem.createdAt}
                imageHeight={220}
              />
            </Grid>
          ))
          : null
    }

      {/* <CardWithAvatar
        title="Post1"
        image="https://source.unsplash.com/300x300/?article"
        description="Lizards are a widespread group of squamate reptiles,"
        imageHeight={150}
        authorName="Annabel James"
        authorProfilePic="https://source.unsplash.com/100x100/?profile"
        publishedDate="Feb 02, 2021"
      /> */}
    </Grid>
  );
};

MainGridLayout.propTypes = {
  postItems: PropTypes.array.isRequired,
};

export default MainGridLayout;
