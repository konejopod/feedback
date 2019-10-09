export default theme => ({
  root: {
    flexGrow: 1,
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