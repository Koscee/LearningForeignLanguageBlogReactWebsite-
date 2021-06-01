import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid, makeStyles, Typography,
} from '@material-ui/core';
// import clsx from 'clsx';
import Controls from '../controls/Controls';
import buttonStyles from '../controls/loadButtonStyles';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';
import { createPost } from '../../actions/postActions';
import uploadImage from '../../actions/imageUploadActions';
import { getCategories } from '../../actions/categoryAction';

const useStyles = makeStyles((theme) => (customStyles(theme)));
const shadow = '-1px -1px 10px 2px rgba(0, 0, 0, 0.25)';
const button = {
  root: {
    border: 0,
    padding: '0 30px',
    height: 40,
    boxShadow: '0 1px 4px 2px rgba(33, 159, 243, .3)',
    //   background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  }
};
const textEditorParentGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))'
};

const initialValues = {
  title: '',
  description: '',
  categoryName: '',
  coverImage: '',
  content: '',
};

const AddPostForm = (props) => {
  const { categories, errors } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const {
    values, formErrors, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  useEffect(() => {
    props.getCategories();
  }, [getCategories]);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    if (values.coverImage !== '') {
      const imageDir = `/posts/coverImages/post_${values.title}`;
      const imageURL = await props.uploadImage(values.coverImage, imageDir);
      values.coverImage = imageURL;
    }
    props.createPost(values, navigate, setLoading, setSuccess);

    // if (loading) setLoading(false);
    // console.log('history', navigate);
  };

  return (
    <Form className={classes.form} onSubmit={handleSubmit} sx={{ px: 4, }}>
      <Card sx={{
        px: 2, pb: 2, boxShadow: `${shadow}`
      }}
      >
        <Grid container justifyContent="center" sx={{ py: 5, }}>
          <Typography component="h1" variant="h3" color="primary.light">
            CREATE&nbsp;NEW&nbsp;POST
          </Typography>
        </Grid>
        <CardContent>
          <Grid
            container
            spacing={5}
          >
            <Grid item xs={12}>
              <Controls.Input
                autoFocus
                required
                name="title"
                id="postTitle"
                label="Post Title"
                error={formErrors.title}
                value={values.title}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Controls.Input
                required
                multiline
                rows={2}
                name="description"
                id="postDescription"
                label="Post Description"
                error={formErrors.description}
                value={values.description}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Controls.Select
                name="categoryName"
                label="Category Name"
                options={categories}
                value={values.categoryName}
                error={formErrors.categoryName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              {/* <Controls.Input
                name="coverImage"
                id="coverImage"
                label="Cover Image"
                error={errors.coverImage}
                value={values.coverImage}
                onChange={handleInputChange}
              /> */}
              <Controls.ImageDropzone
                name="coverImage"
                onAdd={handleInputChange}
                onDelete={handleInputChange}
                error={formErrors.coverImage}
              />
            </Grid>

            <Grid item xs={12} sx={textEditorParentGridStyles}>
              {/* <Controls.Input
                required
                name="content"
                id="content"
                label="content"
                error={errors.content}
                value={values.content}
                onChange={handleInputChange}
              /> */}
              <Controls.TextEditor // remember to fix it as part of the form data on submit
                name="content"
                value={values.content}
                onChange={handleInputChange}
                error={formErrors.content}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="flex-end">
              <Box sx={buttonStyles.wrapper}>
                <Controls.Buttons.Button
                  sx={{ ...button.root, ...buttonStyles.buttonSuccess(success) }}
                  text="PUBLISH"
                // size="large"
                  type="submit"
                  disabled={loading}
                />
                {loading && <CircularProgress size={25} sx={buttonStyles.buttonProgress} />}
              </Box>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Form>
  );
};

AddPostForm.propTypes = {
  getCategories: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  errors: state.errors
});

export default connect(mapStateToProps, { getCategories, uploadImage, createPost })(AddPostForm);
