import React from 'react'
import {PopperProps} from './popper.props'

const Popper = ({children, open, className, fullWidth = false}: PopperProps) => {

  return (
    <div className={`${open ? 'relative' : 'hidden'} flex ${fullWidth ? 'w-full' : 'w-fit'} justify-center ${className}`}>
      <div className={`absolute z-[9999] ${fullWidth ? 'w-full' : 'w-max'}`}>
        {children}
      </div>
    </div>
  )
}

export default Popper