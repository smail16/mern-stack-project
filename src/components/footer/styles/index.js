export const styles =  (theme) => ({
    footer: {
    backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      padding: theme.spacing(5),
    },
    link: {
      marginRight: theme.spacing(2),
      color: theme.palette.primary.main,
    },
    socialIcon: {
      marginRight: theme.spacing(1),
      color: theme.palette.white.main,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
    