import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid, makeStyles, Typography,
} from '@material-ui/core';
import { getCategories } from 'src/actions/categoryAction';
import Controls from '../controls/Controls';
import buttonStyles from '../controls/loadButtonStyles';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';
import { getPost, createPost } from '../../actions/postActions';
import uploadImage from '../../actions/imageUploadActions';

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

const UpdatePostForm = (props) => {
  const { categories, post, errors } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    values, formErrors, setValues, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  const { user } = useSelector((state) => state.security);

  const { id } = useParams();

  useEffect(() => {
    props.getPost(id, navigate);
  }, [getPost]);

  useEffect(() => {
    props.getCategories();
  }, [getCategories]);

  useEffect(() => {
    setValues({ ...values, ...post });
  }, [post]);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  if (user.username !== post.author) <Navigate to="/home" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    if (values.content === '<p><br></p>') {
      values.content = '';
    }
    if (values.coverImage !== '') {
      const imageDir = `/posts/coverImages/post_${values.title}`;
      const imageURL = await props.uploadImage(values.coverImage, imageDir);
      values.coverImage = imageURL;
    }
    props.createPost(values, navigate, setLoading, setSuccess);
    if (loading) { setLoading(false); }
  };

  return (
    <Form className={classes.form} onSubmit={handleSubmit} sx={{ px: 4, }}>
      <Card sx={{
        px: 2, pb: 2, boxShadow: `${shadow}`
      }}
      >
        <Grid container justifyContent="center" sx={{ py: 5, }}>
          <Typography component="h1" variant="h3" color="primary.light">
            UPDATE&nbsp;POST
          </Typography>
        </Grid>
        <CardContent>
          <Grid sx={{ display: 'none' }}>
            <Controls.Input
              required
              disabled
              name="id"
              id="postId"
              label="postId"
              type="hidden"
              value={`${values.id}`}
            />
          </Grid>
          <Grid
            container
            spacing={5}
          >
            <Grid item xs={12}>
              <Controls.Input
                disabled
                name="title"
                id="postTitle"
                label="Post Title"
                error={formErrors.title}
                value={values.title}
                onChange={handleInputChange}
                sx={{ backgroundColor: '#fafafa' }}
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
                disabled
                name="categoryName"
                label="Category Name"
                value={values.categoryName}
                options={categories}
                onChange={handleInputChange}
                sx={{ backgroundColor: '#fafafa' }}
              />
            </Grid>

            <Grid item xs={12}>
              <Controls.ImageDropzone
                name="coverImage"
                imgData={values.coverImage}
                onAdd={handleInputChange}
                onDelete={handleInputChange}
                error={formErrors.coverImage}
              />
            </Grid>

            <Grid item xs={12} sx={textEditorParentGridStyles}>
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
                  text="UPDATE"
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

UpdatePostForm.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired, // gets a single post
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  post: state.post.post,
  errors: state.errors
});

export default connect(mapStateToProps, {
  getPost, getCategories, createPost, uploadImage
})(UpdatePostForm);
