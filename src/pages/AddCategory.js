import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AddCategoryForm from 'src/components/category/AddCategoryForm';

const AddCategory = () => (
  <>
    <Helmet>
      <title>Add Category | Language Learning Blog</title>
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
            <AddCategoryForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default AddCategory;
