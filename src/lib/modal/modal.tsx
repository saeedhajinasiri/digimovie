import React, {useEffect} from 'react'
import {ModalProps} from './modal.props'
import Div from '../div'
import classNames from "../../utils/helpers/class-names";

const Modal = ({open, children, onClose, className, ...rest}: ModalProps) => {

  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [open]);

  if (open) {
    return (
      <Div className={
        classNames(
          `justify-center items-center bg-grey-600/[0.9] backdrop-blur-md fixed top-0 left-0 right-0 z-[1300] w-full h-screen`,
          className,
        )
      }>
        <Div className={`w-screen h-screen absolute`} onClick={onClose} {...rest}/>
        {children}
      </Div>
    )
  }
  return null
}

export default Modal;
