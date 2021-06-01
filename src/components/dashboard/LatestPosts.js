// import { v4 as uuid } from 'uuid';
// import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  // IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllFilteredPosts } from '../../actions/postActions';

const LatestPosts = (props) => {
  const { posts, cardStyle } = props;

  useEffect(() => {
    props.getAllFilteredPosts();
  }, [getAllFilteredPosts]);

  return (
    <Card {...cardStyle}>
      <CardHeader
        subtitle={`${posts.length} in total`}
        title="Latest Posts"
      />
      <Divider />
      <List>
        {posts.map((post, i) => (
          <ListItem
            divider={i < posts.length - 1}
            key={post.id}
          >
            <ListItemAvatar>
              <img
                alt={post.title}
                src={post.coverImage}
                style={{
                  height: 48,
                  width: 48
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={post.title}
              secondary={post.updatedAt ? `Updated ${post.updatedAt}` : ''}
            />
            {/* <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton> */}
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          href="/app/manage/posts"
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};
LatestPosts.propTypes = {
  getAllFilteredPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  cardStyle: PropTypes.any,
};

const mapStateToProps = (state) => ({
  posts: state.post.posts
});

export default connect(mapStateToProps, { getAllFilteredPosts })(LatestPosts);
