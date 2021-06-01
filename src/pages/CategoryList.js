import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import CategoryListResults from 'src/components/category/CategoryListResults';
import CategoryListToolbar from 'src/components/category/CategoryListToolbar';
// import users from 'src/__mocks__/users';
import { connect } from 'react-redux';
import SnackBarAlert from 'src/components/SnacKBarAlert';
import { getCategories } from '../actions/categoryAction';

const CategoryList = (props) => {
  const { categories, alert } = props;

  const [searchText, setSearchText] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    props.getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (alert.message !== '') setAlertOpen(true);
  }, [alert]);

  return (
    <>
      <Helmet>
        <title>Categories | Language Learning Blog</title>
      </Helmet>

      {
        alert && (
          <SnackBarAlert
            severity={alert.type}
            alertOpen={alertOpen}
            setAlertOpen={setAlertOpen}
            message={alert.message}
          />
        )
        }

      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CategoryListToolbar
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Box sx={{ pt: 3 }}>
            <CategoryListResults categories={categories} searchText={searchText} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

CategoryList.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  alert: state.alert
});

export default connect(mapStateToProps, { getCategories })(CategoryList);
