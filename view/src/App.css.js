export default theme => ({
  app: {
    margin: '0 auto',
    maxWidth: theme.constraints.maxWidth,
  },
  content: {
    padding: `60px ${theme.spacing(1)}px`,
    
    [theme.breakpoints.up('sm')]: {
      paddingTop: '70px',
    }
  }
});
