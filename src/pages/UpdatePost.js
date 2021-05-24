import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import UpdatePostForm from 'src/components/posts/UpdatePostForm';

const UpdatePost = () => (
  <>
    <Helmet>
      <title>Update Post | Language Learning Blog</title>
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
            <UpdatePostForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default UpdatePost;
