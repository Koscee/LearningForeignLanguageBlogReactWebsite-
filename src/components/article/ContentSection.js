import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles, Grid, Typography, Container,
  Card,
  IconButton,
  Box
} from '@material-ui/core';

// import InfoAvatar from '../InfoAvatar';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import content from '../../__mocks__/content';
import { connect } from 'react-redux';
import { deleteLike, likePost } from 'src/actions/likeAction';
import { useNavigate } from 'react-router';
import AuthorInfo from './AuthorInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: 'pink',
    flexDirection: 'column',
    width: '75%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    margin: 'auto',
    marginTop: '-30vh',
  },
  headerMainGrid: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
    justifyContent: 'center',
    paddingBottom: '2rem'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white'
  },
  titleText: {
    marginBottom: 16
  },
  card: {
    padding: '50px 20px',
    boxShadow: 'none',
    '& .MuiTypography-root': {
      lineHeight: '1.8',
      fontSize: '1.09rem',
      textAlign: 'justify',
      //   fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.grey[700]
    },
    '& p': {
      margin: 0,
    },
    '& p > img': {
      display: 'block',
      maxHeight: '500px',
      maxWidth: '100%',
      margin: '10px auto'
    },
    '& iframe': {
      display: 'block',
      height: '400px',
      width: '100%',
      margin: '15px auto'
    }
  }
}));

const ContentSection = (props) => {
  const { post, username } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [displayComment, setDisplayComment] = useState(false);

  const mountedRef = useRef(true);
  useEffect(() => {
    if (post.likes !== undefined) {
      for (let i = 0; i < post.likes.length; i++) {
        const like = post.likes[i];
        if (like.userName === username) {
          setIsLiked(true);
          break;
        }
      }
    }
    return () => {
      mountedRef.current = false;
    };
  }, [post.id]);

  const { jwtToken } = localStorage;

  const handleLikePost = async () => {
    if (jwtToken) {
      if (!isLiked) {
        await props.likePost(post.id, { isLiked: true }, navigate, setIsLiked);
      } else {
        await props.deleteLike(post.id, navigate, setIsLiked);
      }
    } else { navigate('/user/login'); }
    console.log('clicked', isLiked);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.headerMainGrid}>
        <Grid className={classes.headerContainer}>
          <Grid item sx={{ pb: 1 }}>
            <Typography variant="h1" align="left" className={classes.titleText}>
              {post.title}
            </Typography>
          </Grid>
          <Grid item>
            <AuthorInfo
              authorName={post.author}
              authorProfilePic={post.authorAvatar}
              // authorProfilePic="/static/images/avatars/avatar_3.png"
              publishedDate={post.createdAt}
              isTitle
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <Container maxWidth="lg">
            <Typography variant="body1" align="justify" dangerouslySetInnerHTML={{ __html: post.content }}>
              {/* {post.content} */}
              {/* <img alt="testImg" src="/static/images/coverImg.jpg" />
              {content} */}
            </Typography>
            <Box sx={{ paddingTop: 6 }}>
              <IconButton onClick={handleLikePost}>
                <ThumbUpIcon color={isLiked ? 'error' : 'disabled'} />
              </IconButton>
              <IconButton onClick={() => setDisplayComment(!displayComment)}>
                <CommentIcon color={displayComment ? 'primary' : 'inherit'} />
              </IconButton>
            </Box>
          </Container>
        </Card>
      </Grid>
    </Grid>
  );
};

ContentSection.propTypes = {
  likePost: PropTypes.func.isRequired,
  deleteLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  username: state.security.user.username
});

export default connect(mapStateToProps, { likePost, deleteLike })(ContentSection);
