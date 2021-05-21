import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AddPostForm from 'src/components/posts/AddPostForm';

const AddPost = () => (
  <>
    <Helmet>
      <title>Add Post | Language Learning Blog</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <AddPostForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default AddPost;
