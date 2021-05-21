import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AddUserForm from 'src/components/user/AddUserForm';

const AddUser = () => (
  <>
    <Helmet>
      <title>Add User | Language Learning Blog</title>
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
            <AddUserForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default AddUser;
