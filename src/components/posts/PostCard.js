import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { CardActions, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    boxShadow: '-1px 2px 5px 1px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      boxShadow: '-1px 2px 20px 1px rgba(0, 0, 0, 0.25)',
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
    paddingBottom: 0,
    paddingTop: 0
  },
  cover: {
    width: 180,
  },
  alignment: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '8px 10px 8px 16px'
  },
  icon: {
    padding: 8
  }
}));

const PostCard = ({ post, href, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...rest}>
      <CardMedia
        component="img"
        className={classes.cover}
        image={post.image}
        title={post.title}
      />
      <div className={classes.details}>
        <div className={classes.alignment}>
          <Typography color="tertiary.main" gutterBottom component="p" variant="subtitle2">
            Category
          </Typography>
        </div>
        <CardContent className={classes.content}>
          <Typography gutterBottom component="h5" variant="h3" fontSize="large">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${post.content.slice(0, 80)}...`}
          </Typography>
        </CardContent>
        <Typography variant="caption" color="textSecondary" className={classes.alignment}>
          posted on: Febuary 20th, 2021
        </Typography>
        <Divider />
        <CardActions className={classes.alignment}>
          <IconButton href={href} aria-label="view" className={classes.icon}>
            <OpenInNewIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="edit" className={classes.icon}>
            <EditIcon color="secondary" fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" className={classes.icon}>
            <DeleteIcon color="error" fontSize="small" />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired
};

export default PostCard;
