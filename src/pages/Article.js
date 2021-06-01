import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Box, Container, Grid } from '@material-ui/core';
import CommentSection from 'src/components/article/CommentSection';
import PageTopSection from '../components/article/TopSection';
import RelatedPost from '../components/article/RelatedPost';
import { getPost, getRelatedPosts } from '../actions/postActions';

const Article = (props) => {
  const { post, relatedPosts } = props;
  const navigate = useNavigate();
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  async function populateComments() {
    setComments(post.comments);
  }

  useEffect(() => {
    console.log('useEffect1', post);
    (async () => {
      await props.getPost(id, navigate);
      await props.getRelatedPosts(id, post.categoryName);
      await populateComments();
    })();
  }, [post.id, id]);
  return (
    <>
      <Helmet>
        <title>Article | Language Learning Blog</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'white',
          minHeight: '100%',
          pb: 3,
        }}
      >
        <Grid container flexDirection="column">
          <Grid item>
            <PageTopSection post={post} />
          </Grid>
          <Grid item>
            <Container maxWidth="lg" sx={{ margin: 'auto', backgroundColor: 'background.default', }}>
              <CommentSection postId={id} comments={comments} />
            </Container>
          </Grid>
          <Grid item>
            <Container maxWidth="lg" sx={{ margin: 'auto' }}>
              <Box sx={{ pt: 10 }}>
                <RelatedPost relatedPosts={relatedPosts} />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Article.propTypes = {
  getPost: PropTypes.func.isRequired, // gets a single post
  getRelatedPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  relatedPosts: state.post.relatedPosts
});

export default connect(mapStateToProps, { getPost, getRelatedPosts })(Article);
