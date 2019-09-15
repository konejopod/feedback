export default theme => ({
  App: {
    textAlign: 'center',
  },
  
  AppHeader: {
    backgroundColor: theme.palette.background.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }
});