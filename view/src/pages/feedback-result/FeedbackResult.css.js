export default theme => ({
  content: {
    padding: theme.spacing(1),
  },  
  result: {
    borderTop: `1px solid ${theme.palette.border.main}`,
    borderBottom: `1px solid ${theme.palette.border.main}`,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  codeLabel: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  labels: {
    flex: 1,
  },
  values: {
    flex: 1,
  },
  link: {
    marginTop: theme.spacing(2),
  },
});