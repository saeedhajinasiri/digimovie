import React, {useEffect} from 'react'
import {DrawerProps} from './drawer.props'
import {CSSTransition} from "react-transition-group";
import 'animate.css';

const Drawer = ({open, onClose, anchor = 'right', children, className}: DrawerProps) => {

  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [open]);

  let enterAnimation;
  let exitAnimation;
  let childrenLocation;
  let childrenSize;
  switch (anchor) {
    case 'right': {
      enterAnimation = 'animate__slideInRight';
      exitAnimation = 'animate__slideOutRight';
      childrenLocation = 'items-end justify-end';
      childrenSize = 'min-w-[300px] h-screen';
      break;
    }
    case 'left': {
      enterAnimation = 'animate__slideInLeft';
      exitAnimation = 'animate__slideOutLeft';
      childrenLocation = 'items-start justify-start';
      childrenSize = 'min-w-[300px] h-screen'
      break;
    }
    case 'top': {
      enterAnimation = 'animate__slideInDown';
      exitAnimation = 'animate__slideOutUp';
      childrenLocation = 'items-start justify-end';
      childrenSize = 'min-h-[300px] w-screen'
      break;
    }
    case 'bottom': {
      enterAnimation = 'animate__slideInUp';
      exitAnimation = 'animate__slideOutDown';
      childrenLocation = 'items-end justify-end';
      childrenSize = 'min-h-[300px] w-screen'
      break;
    }

    default: {
      enterAnimation = 'animate__slideInRight';
      exitAnimation = 'animate__slideOutRight';
      childrenLocation = 'items-end justify-end';
    }
  }

  const hideDrawer = () => {
    onClose()
  }

  return (
    <CSSTransition
      in={open}
      timeout={1000}
      unmountOnExit
      classNames={{
        enterActive: `animate__animated ${enterAnimation}`,
        exitActive: `animate__animated ${exitAnimation}`,
      }}
      onExited={hideDrawer}
    >
      <div className={`${anchor === 'top' || anchor === 'bottom' ? 'flex-col-reverse' : 'flex-row'} flex z-10 fixed  bg-transparent w-screen h-screen top-0 right-0 ${childrenLocation}`}>
        {anchor === 'right' || anchor === 'top' ? <div className={`w-full h-full bg-[rgba(0,0,0,0.5)]`} onClick={onClose}/> : null}
        <div className={`relative overflow-y-scroll bg-white pt-8 ${childrenSize} ${className}`}>
          {children}
        </div>
        {anchor === 'left' || anchor === 'bottom' ? <div className={`w-full h-full bg-[rgba(0,0,0,0.5)]`} onClick={onClose}/> : null}
      </div>
    </CSSTransition>
  )

}

export default Drawer
