import React, { useEffect } from 'react';
// import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  Grid, makeStyles, Typography,
} from '@material-ui/core';
import Controls from '../controls/Controls';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';
import { getPost, createPost } from '../../actions/postActions';

const useStyles = makeStyles((theme) => (customStyles(theme)));
const shadow = '-1px -1px 10px 2px rgba(0, 0, 0, 0.25)';
const buttonStyles = {
  border: 0,
  padding: '0 30px',
  height: 40,
  boxShadow: '0 1px 4px 2px rgba(33, 159, 243, .3)',
//   background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
};
const textEditorParentGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))'
};

const categories = [
  { id: 'chinese', title: 'Chinese' },
  { id: 'english', title: 'English' },
  { id: 'french', title: 'French' },
  { id: 'russian', title: 'Russian' },
];
const initialValues = {
  title: '',
  categoryName: categories[2].title,
  coverImage: '',
  content: '',
};

const UpdatePostForm = (props) => {
  const { post, errors } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    values, formErrors, setValues, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  const { id } = useParams();

  useEffect(() => {
    props.getPost(id, navigate);
  }, [getPost]);

  useEffect(() => {
    setValues({ ...values, ...post });
  }, [post]);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.content === '<p><br></p>') {
      values.content = '';
    }
    props.createPost(values, navigate);
    // console.log(values);
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
              <Controls.Buttons.Button
                sx={buttonStyles}
                text="UPDATE"
                // size="large"
                type="submit"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Form>
  );
};

UpdatePostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired, // gets a single post
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  errors: state.errors
});

export default connect(mapStateToProps, { getPost, createPost })(UpdatePostForm);
