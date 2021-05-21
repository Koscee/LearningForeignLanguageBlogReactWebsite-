import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Pagination
} from '@material-ui/core';
import PostListToolbar from 'src/components/posts/PostListToolbar';
import PostCard from 'src/components/posts/PostCard';
import posts from 'src/__mocks__/posts';

const ProductList = () => (
  <>
    <Helmet>
      <title>Posts | Language Learning Blog</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <PostListToolbar />
        <Box sx={{ pt: 8, px: 2 }}>
          <Grid
            container
            spacing={5}
          >
            {posts.map((post) => (
              <Grid
                item
                key={post.title}
                lg={6}
                md={6}
                xs={12}
              >
                <PostCard post={post} href="/article" />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}
      </Container>
    </Box>
  </>
);

export default ProductList;
