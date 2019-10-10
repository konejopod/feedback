export default theme => ({
  root: {
    flexGrow: 1,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  badge: {
    backgroundColor: theme.palette.accent.dark,
  },
  mainIcon: {
    marginRight: -theme.spacing(2)
  },
  menuIcon: {
    marginRight: theme.spacing(1)
  },
});