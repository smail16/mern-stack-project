import { styled } from '@mui/material'

export const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginTop: '1rem',
  },
}))

export const Section = styled('form')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  borderBottom: `1px solid ${theme.palette.grey.main}`,
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}))
