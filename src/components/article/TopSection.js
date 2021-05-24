import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid, makeStyles,
//   Box
} from '@material-ui/core';
import ContentSection from './ContentSection';
import { getPost } from '../../actions/postActions';

// const post = {
//   title: 'Business Chinese',
//   content: 'In China, Business is one of the most important source of living abro',
//   coverImage: 'companys.png',
//   categoryName: 'Chinese',
//   createdAt: '2021-05-22',
// };

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  mainContainer: {
    height: '45vh',
    background: 'linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.8)), url("/static/images/coverImg.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
  },
//   mainItem: {
//     // padding: theme.spacing(6),
//     // textAlign: 'left',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%'
//   }
}));

const PageTopSection = (props) => {
  const { post } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    props.getPost(id, navigate);
  }, [post]);

  return (
    <Grid container className={classes.root} flexDirection="column">
      <Grid item>
        <Grid container className={classes.mainContainer} />
        <ContentSection post={post} />
      </Grid>
      {/* <Grid item className={classes.mainItem}>
        <Container maxWidth="md" className={classes.mainItem}>
        </Container>
      </Grid> */}

    </Grid>
  );
};

PageTopSection.propTypes = {
  getPost: PropTypes.func.isRequired, // gets a single post
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post.post,
});

export default connect(mapStateToProps, { getPost })(PageTopSection);
