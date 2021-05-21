import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import HomeSearchSection from '../components/home/HomeSearchSection';
import HomeItemsSection from '../components/home/HomeItemsSection';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home | Language Learning Blog</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'white',
        minHeight: '100%',
        pb: 3,
      }}
    >
      <HomeSearchSection />
      <Container maxWidth="lg" style={{ margin: 'auto' }}>
        <Box sx={{ pt: 4 }}>
          <HomeItemsSection />
        </Box>
      </Container>
    </Box>
  </>
);

export default HomePage;
