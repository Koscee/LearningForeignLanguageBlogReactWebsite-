// import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  TextareaAutosize,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Controls from '../controls/Controls';
import { useForm, Form } from '../forms/useForm';
import { createComment } from '../../actions/commentAction';

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
    minHeight: '90px',
    minWidth: '350px',
    border: '1px solid white',
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '3px',
    fontSize: '1.01rem',
    color: theme.palette.customGray.shade900
  },
  errorTxt: {
    textAlign: 'left',
    fontSize: '0.8rem',
    color: theme.palette.error.main,
    margin: 0,
    marginBottom: 4
  },
  button: {
    border: 0,
    margin: 8,
    padding: '0 20px',
    height: 35,
    boxShadow: '0 1px 4px 2px rgba(33, 159, 243, .3)'
  },
}));

const errorStyle = {
  margin: 8,
  border: '2px solid red',
  borderRadius: '3px',
};

const initialValues = {
  content: '',
};

const CommentForm = (props) => {
  const { postId, errors } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    values, formErrors, setFormErrors, handleInputChange,
  } = useForm(initialValues);

  useEffect(() => {
    setFormErrors(errors);
  }, [errors]);

  const { jwtToken } = localStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jwtToken) {
      props.createComment(postId, values, navigate);
      // console.log(values);
    } else { navigate('/user/login'); }
  };

  return (
    <Form onSubmit={handleSubmit} className={classes.root}>
      {/* <Typography gutterBottom variant="h5" color="textSecondary">
        SAY SOMETHING...
      </Typography> */}
      <div style={errors.content ? errorStyle : {}}>
        <TextareaAutosize
          className={classes.textArea}
          aria-label="comment box"
          maxRows={10}
          placeholder="Type your comment here"
          name="content"
          id="comment"
          error={formErrors.content}
          value={values.content}
          onChange={handleInputChange}
        />
      </div>
      {formErrors && <p className={classes.errorTxt}>{errors.content}</p>}

      <Controls.Buttons.Button
        className={classes.button}
        text="COMMENT"
        type="submit"
        // size="large"
      />
    </Form>

  );
};

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createComment })(CommentForm);
