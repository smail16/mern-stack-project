import { Box, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material'
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />)

function Modal({ title, children, isOpen, onClickCloseIcon }) {
  return (
    <Dialog
      maxWidth="sm"
      sx={{
        '.MuiDialog-paper': {
          minWidth: '40%',
        },
      }}
      onClose={onClickCloseIcon}
      open={isOpen}
      TransitionComponent={Transition}
    >
      <Box>
        <Box pl={2} pt={2} onClick={onClickCloseIcon}>
          <IoIosCloseCircleOutline size={40} />
        </Box>
        <DialogTitle>{title}</DialogTitle>

        <Box p={2}>{children}</Box>
      </Box>
    </Dialog>
  )
}

export default Modal
