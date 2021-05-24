import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Typography, Container } from '@material-ui/core';
import CardWithAvatar from '../cards/CardWithAvatar';
import { getPosts } from '../../actions/postActions';

const RelatedPost = (props) => {
  const {
    postItems
  } = props;

  useEffect(() => {
    props.getPosts();
  }, [postItems.length]);

  return (
    <Grid container>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h3" color="textSecondary">Related Posts</Typography>
      </Container>
      {
        postItems.length > 0
          ? postItems.map((postItem) => (
            <Grid item md={3} sm={6} xs={12} key={postItem.id}>
              <CardWithAvatar
                title={postItem.title}
                image={postItem.coverImage}
                description={postItem.content}
                imageHeight={130}
                href={`/article/${postItem.id}`}
                authorName="Annabel James"
                authorProfilePic="https://source.unsplash.com/100x100/?profile"
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
  getPosts: PropTypes.func.isRequired,
  postItems: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  postItems: state.post.posts,
});

export default connect(mapStateToProps, { getPosts })(RelatedPost);
