// import React from 'react';
import {
  makeStyles,
  TextareaAutosize
} from '@material-ui/core';
import Controls from '../controls/Controls';
import { useForm, Form } from '../forms/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textArea: {
    padding: 10,
    margin: 8,
    minHeight: '80px',
    minWidth: '350px',
    border: '1px solid white',
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '3px',
    fontSize: '1.01rem',
    color: theme.palette.customGray.shade900
  },
  button: {
    border: 0,
    margin: 8,
    padding: '0 20px',
    height: 35,
    boxShadow: '0 1px 4px 2px rgba(33, 159, 243, .3)'
  },
}));

const initialValues = {
  comment: '',
};

const CommentForm = () => {
  const classes = useStyles();
  const {
    values, formErrors, handleInputChange,
  } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} className={classes.root}>
      {/* <Typography gutterBottom variant="h5" color="textSecondary">
        SAY SOMETHING...
      </Typography> */}
      <TextareaAutosize
        className={classes.textArea}
        aria-label="comment box"
        maxRows={10}
        placeholder="Type your comment here"
        name="comment"
        id="comment"
        error={formErrors.comment}
        value={values.comment}
        onChange={handleInputChange}
      />
      <Controls.Buttons.Button
        className={classes.button}
        text="COMMENT"
        type="submit"
        // size="large"
      />
    </Form>

  );
};

export default CommentForm;
