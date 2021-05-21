// import { useState } from 'react';
import {
  Card,
  CardContent,
  Grid, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';
import Controls from '../controls/Controls';
import customStyles from '../forms/LoginRegisterFormStyles';
import { useForm, Form } from '../forms/useForm';

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
  postTitle: '',
  category: categories[0].title,
  coverImage: '',
  content: '',
};

const AddPostForm = () => {
  const classes = useStyles();
  const {
    values, errors, handleInputChange,
  } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
                name="postTitle"
                id="postTitle"
                label="Post Title"
                error={errors.postTitle}
                value={values.postTitle}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Controls.Select
                name="category"
                label="Category"
                value={values.category}
                options={categories}
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
                error={errors.coverImage}
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
                error={errors.content}
              />
            </Grid>

            <Grid container item xs={12} justifyContent="flex-end">
              <Controls.Buttons.Button
                sx={buttonStyles}
                text="CREATE"
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

export default AddPostForm;
