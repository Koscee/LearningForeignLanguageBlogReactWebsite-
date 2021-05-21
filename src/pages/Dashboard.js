import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import TotalCategories from 'src/components/dashboard/TotalCategories';
import LatestUsers from 'src/components/dashboard/LatestUsers';
import LatestPosts from 'src/components/dashboard/LatestPosts';
import TotalPost from 'src/components/dashboard/TotalPost';
import TotalUsers from 'src/components/dashboard/TotalUsers';
import TotalLikes from 'src/components/dashboard/TotalLikes';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Language Learning Blog</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xl={3}
            xs={6}
          >
            <TotalUsers />
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xl={3}
            xs={6}
          >
            <TotalPost />
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xl={3}
            xs={6}
          >
            <TotalCategories />
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xl={3}
            xs={6}
          >
            <TotalLikes sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestPosts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xl={9}
            xs={12}
          >
            <LatestUsers />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
