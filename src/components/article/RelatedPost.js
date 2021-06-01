import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import CardWithAvatar from '../cards/CardWithAvatar';

const RelatedPost = (props) => {
  const { relatedPosts } = props;

  // console.log('relatedPost', relatedPosts);

  return (
    <Grid container>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h3" color="textSecondary">Related Posts</Typography>
      </Container>
      {
        relatedPosts.length > 0
          ? relatedPosts.slice(0, 4).map((postItem) => (
            <Grid item md={3} sm={6} xs={12} key={postItem.id}>
              <CardWithAvatar
                title={postItem.title}
                image={postItem.coverImage}
                description={postItem.description}
                imageHeight={130}
                href={`/article/${postItem.id}`}
                authorName={postItem.author}
                // authorProfilePic="https://source.unsplash.com/100x100/?profile"
                authorProfilePic={postItem.authorAvatar}
                publishedDate={postItem.createdAt}
              />
            </Grid>
          ))
          : null
      }
    </Grid>
  );
};

RelatedPost.propTypes = {
  relatedPosts: PropTypes.array.isRequired,
};

export default RelatedPost;
