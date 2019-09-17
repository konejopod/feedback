export default theme => ({
  home: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${theme.spacing(4)}px auto`,
    maxWidth: '400px',
    textAlign: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  message: {
    marginTop: theme.spacing(2),
  },
});