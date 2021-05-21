// import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import CardWithAvatar from '../cards/CardWithAvatar';
// import CardWithAvatar from '../cards/CardWithAvatar';

const RelatedPost = (props) => {
  const { ...others } = props;
  return (
    <Grid container {...others}>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h3" color="textSecondary">Related Posts</Typography>
      </Container>
      <Grid item md={3} sm={6} xs={12}>
        <CardWithAvatar
          title="Post1"
          image="https://source.unsplash.com/300x300/?article"
          description="Lizards are a widespread group of squamate reptiles,"
          imageHeight={130}
          href="/article"
          authorName="Annabel James"
          authorProfilePic="https://source.unsplash.com/100x100/?profile"
          publishedDate="Feb 02, 2021"
        />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <CardWithAvatar
          title="Post1"
          image="https://source.unsplash.com/300x300/?article"
          description="Lizards are a widespread group of squamate reptiles,"
          imageHeight={130}
          href="/article"
          authorName="Annabel James"
          authorProfilePic="https://source.unsplash.com/100x100/?profile"
          publishedDate="Feb 02, 2021"
        />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <CardWithAvatar
          title="Post1"
          image="https://source.unsplash.com/300x300/?article"
          description="Lizards are a widespread group of squamate reptiles,"
          imageHeight={130}
          href="/article"
          authorName="Annabel James"
          authorProfilePic="https://source.unsplash.com/100x100/?profile"
          publishedDate="Feb 02, 2021"
        />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <CardWithAvatar
          title="Post1"
          image="https://source.unsplash.com/300x300/?article"
          description="Lizards are a widespread group of squamate reptiles,"
          imageHeight={130}
          href="/article"
          authorName="Annabel James"
          authorProfilePic="https://source.unsplash.com/100x100/?profile"
          publishedDate="Feb 02, 2021"
        />
      </Grid>
    </Grid>
  );
};

// RelatedPost.propTypes = {
//   postItems: PropTypes.array.isRequired,
// };

export default RelatedPost;
