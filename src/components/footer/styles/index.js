export const styles = (theme) => ({
  footer: {
    color: theme.palette.primary.main,
    padding: theme.spacing(5),
  },
  link: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  socialIcon: {
    marginRight: theme.spacing(6),
    color: theme.palette.white.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
})
