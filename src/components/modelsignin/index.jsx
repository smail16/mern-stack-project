import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'

const style = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 400,
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'background.paper',
  margin: 'auto',
  marginTop: 5,
  padding: 3,
  borderRadius: 5,
  boxShadow: '5px 5px 4px #ccc',
  sx: { ':hover': { boxShadow: '1px 3px 7px #ccc' } },
}

function ModalSignin() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      > */}
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Se connecter
        </Typography>
        <TextField margin="normal" type="text" variant="outlined" placeholder="Name" />
        {' '}
        <TextField margin="normal" type="password" variant="outlined" placeholder="Password" />
        <Button
          sx={{
            marginTop: 3,
            borderRadius: 3,
          }}
          variant="contained"
        >
          Se connecter

        </Button>
      </Box>
      {/* </Modal> */}

    </>
  )
}
export default ModalSignin
