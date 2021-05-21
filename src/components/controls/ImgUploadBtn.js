import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  iconButton: {
    // background: theme.palette.customWhite.shade50,
    height: 20,
    width: 35,
  }
}));

export default function UploadImageButtons({ ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <label htmlFor="icon-button-file">
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <Fab size="small" className={classes.iconButton} color="secondary" aria-label="upload picture" component="span">
          <PhotoCamera fontSize="small" />
        </Fab>
      </label>
    </div>
  );
}
