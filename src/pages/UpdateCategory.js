import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import UpdateCategoryForm from 'src/components/category/UpdateCategoryForm';

const UpdateCategory = () => (
  <>
    <Helmet>
      <title>Update Category | Language Learning Blog</title>
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
            <UpdateCategoryForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default UpdateCategory;
