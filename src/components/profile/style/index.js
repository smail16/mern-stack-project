import { Stack, styled } from '@mui/material'

export const ButtonContainer = styled(Stack)(({ theme }) => ({
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
  padding: '1.5rem 1rem',
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '20px',
  boxSizing: 'border-box',
  marginTop: '1rem',
  boxShadow: '0 2px 16px 0 rgba(64,41,85,0.08)',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}))
