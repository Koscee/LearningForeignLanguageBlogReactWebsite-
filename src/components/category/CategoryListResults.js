import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCategory } from '../../actions/categoryAction';

const CategoryListResults = (props) => {
  const { categories, searchText } = props;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const onDeleteClick = (id) => {
    props.deleteCategory(id);
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Category
                </TableCell>
                <TableCell>
                  Created date
                </TableCell>
                <TableCell align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((category) => (
                  category.name.toLowerCase().includes(searchText.toLowerCase()) && (
                  <TableRow
                    hover
                    key={category.id}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {category.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {moment(category.created_At).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell align="center">
                      <Link to={`/app/manage/categories/updateCategory/${category.id}`}>
                        <IconButton style={{ marginRight: 3 }}>
                          <EditIcon color="secondary" />
                        </IconButton>
                      </Link>

                      <IconButton style={{ marginLeft: 3 }} onClick={() => onDeleteClick(category.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  )
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={categories.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CategoryListResults.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default connect(null, { deleteCategory })(CategoryListResults);
