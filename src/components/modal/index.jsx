import React from 'react'
import { Dialog, Slide } from '@mui/material'

const Transition = React.forwardRef(({ props, ref }) => (
  <Slide direction="up" ref={ref} {...props} />
))

function Modal({ children, isOpen, onClickCloseIcon }) {
  return (
    <Dialog onClose={onClickCloseIcon} open={isOpen} TransitionComponent={Transition}>
      <div>
        <div>icon</div>
        {children}
      </div>
    </Dialog>
  )
}

export default Modal
