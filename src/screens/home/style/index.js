import { styled } from '@mui/material'

export const Image = styled('a')(({ img }) => ({
  textDecoration: 'none',
  width: '50%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  backgroundImage: `url(${img})`,
  transition: 'transform .7s ease',
  '&:hover': {
    transform: 'scale(1.04)',
  },
  '&::before': {
    content: `""`,
    background: 'linear-gradient(transparent,rgba(0,0,0,.25) 100%)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}))
