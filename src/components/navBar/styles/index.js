export const styles = (theme, isActiveItem) => ({
  leftSide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  iconMenu: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  categoryText: {
    borderBottom: isActiveItem ? `2px solid ${theme.palette.primary.main}` : '',
    color: isActiveItem ? theme.palette.primary.main : '',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      margin: 0,
      borderBottom: `1px solid ${theme.palette.grey.main}`,
      borderLeft: isActiveItem ? `4px solid ${theme.palette.primary.main}` : '',
      color: isActiveItem ? theme.palette.primary.main : '',
    },
  },
  drawer: {
    '.MuiDrawer-paperAnchorLeft': { width: '80%' },
  },
})
