import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfilePageTitle from 'src/components/account/AccountProfilePgTitle';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';

const Account = () => (
  <>
    <Helmet>
      <title>Profile | Language Learning Blog</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 6
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={5}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            // lg={12}
            // md={6}
            // xs={12}
          >
            <AccountProfilePageTitle />
          </Grid>
          <Grid
            item
            // lg={12}
            // md={6}
            // xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
