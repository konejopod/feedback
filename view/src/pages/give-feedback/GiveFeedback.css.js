export default theme => ({
  content: {
    padding: theme.spacing(1),
    maxWidth: '800px',
    margin: `${theme.spacing(2)}px auto`,
  }, 
  form: {
    padding: theme.spacing(2),
    margin: '0 auto',
    maxWidth: '400px',
    textAlign: 'left',
  },
  textField: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  message: {
    marginTop: theme.spacing(2),
  },
  label: {
    marginTop: theme.spacing(1),
  },
  slider: {
    margin: theme.spacing(1),
    width: '90%',
  }, 
  actionButton: {
    marginTop: theme.spacing(2),
  },
  stars: {
    borderRadius: '10px',
    color: theme.palette.secondary.dark,
    justifyContent: 'space-around',
    margin: '0 auto',
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '50%',
  }
});