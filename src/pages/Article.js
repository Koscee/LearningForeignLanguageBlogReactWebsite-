import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import CommentSection from 'src/components/article/CommentSection';
import PageTopSection from '../components/article/TopSection';
// import ContentSection from '../components/article/ContentSection';
import RelatedPost from '../components/article/RelatedPost';
import comments from '../__mocks__/comments';

const ArticlePage = () => (
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
          <PageTopSection />
        </Grid>
        <Grid item>
          <Container maxWidth="lg" sx={{ margin: 'auto', backgroundColor: 'background.default', }}>
            <CommentSection comments={comments} />
          </Container>
        </Grid>
        <Grid item>
          <Container maxWidth="lg" sx={{ margin: 'auto' }}>
            <Box sx={{ pt: 10 }}>
              <RelatedPost />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default ArticlePage;
