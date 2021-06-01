import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import UpdateUserForm from 'src/components/users/UpdateUserForm';

const UpdateUser = () => (
  <>
    <Helmet>
      <title>Update User | Language Learning Blog</title>
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
            <UpdateUserForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default UpdateUser;
