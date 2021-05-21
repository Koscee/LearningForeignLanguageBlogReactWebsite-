import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CategorySearch from 'src/components/category/CategorySearch';
import postItems from '../__mocks__/posts';
import MainGridLayout from '../components/gridLayouts/MainGridLayout';

export default function Category() {
  return (
    <>
      <Helmet>
        <title>Category | Language Learning Blog</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ my: 5 }}>
            <CategorySearch />
          </Box>
        </Container>
        <Container maxWidth="lg" style={{ margin: 'auto' }}>
          <Box sx={{ pt: 3 }}>
            <MainGridLayout postItems={postItems} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
