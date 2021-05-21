const customStyles = (theme) => ({
  container: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius
  },
  alignCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    margin: theme.spacing(4, 1, 6),
  },
  logo: {
    marginBottom: theme.spacing(3),
    height: theme.spacing(6),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5.5),
  },
  submit: {
    marginTop: theme.spacing(6),
  },
});

export default customStyles;
