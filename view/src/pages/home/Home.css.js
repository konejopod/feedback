export default theme => ({
  home: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${theme.spacing(6)}px auto`,
    maxWidth: '400px',
    textAlign: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  message: {
    marginTop: theme.spacing(2),
  },
  sliderBox: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  slider: {
    marginLeft: theme.spacing(2),
  },
});