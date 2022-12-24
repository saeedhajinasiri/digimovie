import React, {useEffect} from 'react'
import {SnackbarProps} from './snackbar.props'
import classNames from "../../utils/helpers/class-names";
import {ANCHOR_ORIGIN} from './snackbar.style'

const Snackbar = ({open, onClose, children, anchorOrigin = {vertical: 'bottom', horizontal: 'left'}, autoHideDuration = 8000}: SnackbarProps) => {


  useEffect(() => {
    if (open) {
      setTimeout(() => {
        onClose()
      }, autoHideDuration)
    }
  }, [open])

  return (
    <div className={
      classNames(
        `${open ? 'fixed' : 'hidden'} flex justify-center items-center rounded bg-primary z-[999999999999] m-2`,
        ANCHOR_ORIGIN(anchorOrigin)
      )}>
      {children}
    </div>
  )
}

export default Snackbar;
