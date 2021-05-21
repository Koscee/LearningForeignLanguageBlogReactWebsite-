const cardStyles = (theme) => ({
  root: {
    margin: 25,
    // background: 'pink',
    textAlign: 'left'
  },
  simpleCard: {
    // maxWidth: 345,
    boxShadow: '-1px 2px 20px 1px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      boxShadow: '-1px 2px 5px 1px rgba(0, 0, 0, 0.25)',
    }
  },
  cardWithAvatar: {
    // maxWidth: 250,
    margin: 25,
    textAlign: 'left',
    paddingBottom: 4,
    boxShadow: '1px 2px 4px 1px rgba(0, 0, 0, 0.05)',
    border: 'none',
    borderRadius: 0,
    '& .MuiCardContent-root': {
      padding: '16px 4px 8px 2px'
    },
    '& .MuiCardActions-root': {
      paddingLeft: 2
    },
  },
  cardActionGrid: {
    padding: '0 16px 16px 8px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: '',
      textAlign: 'left'
    }
  },
  avatarGrid: { paddingLeft: 0 },
  postTime: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      // backgroundColor: 'yellow',
      justifyContent: 'flex-start'
    }
  },
  button: {
    '& .MuiButton-endIcon': {
      marginLeft: 0
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      // backgroundColor: 'yellow',
      justifyContent: 'flex-end'
    }
  }
});

export default cardStyles;
