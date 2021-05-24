import { useState } from 'react';
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
  const { post } = props;
  const classes = useStyles();
  const [isliked, setIsLiked] = useState(false);
  const [displayComment, setDisplayComment] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.headerMainGrid}>
        <Grid className={classes.headerContainer}>
          <Grid item>
            <Typography variant="h2" align="left" className={classes.titleText}>
              {post.title}
            </Typography>
          </Grid>
          <Grid item>
            <AuthorInfo
              authorName="Anabell James"
              authorProfilePic="/static/images/avatars/avatar_3.png"
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
              <IconButton onClick={() => setIsLiked(!isliked)}>
                <ThumbUpIcon color={isliked ? 'error' : 'disabled'} />
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
  post: PropTypes.object.isRequired,
};

export default ContentSection;
