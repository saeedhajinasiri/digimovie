import React from 'react'
import {AlertProps} from './alert.props'
import classNames from "../../utils/helpers/class-names";
import {SEVERITY, VARIANT} from "./alert.style";
import Button from "../button";
import Div from "../div";
import Text from "../text";

const Alert = ({children, severity = 'danger', variant = 'filled', className, onClose, ...rest}: AlertProps) => {

  return (
    <div className={classNames(
      `flex flex-row-reverse items-center justify-end rounded h-12 px-4 font-sans-regular text-m-tiny sm:text-t-tiny md:text-d-tiny`,
      SEVERITY[severity],
      VARIANT[variant],
      className,
    )} {...rest}>
      <Button className={'ml-2'} size={"tiny"} color={"inherit"} variant={"text"} onClick={onClose}>
        <svg className={'h-6 w-6 min-h-[24px] min-w-[24px]'} fill={"currentColor"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </Button>
      <Text color={"inherit"} typography={"sm"} align={"right"}>{children}</Text>
      <Div className='w-6 h-6 mr-2'>
        <Icon severity={severity}/>
      </Div>
    </div>
  )
}

const Icon = ({severity}: { severity: 'danger' | 'success' | 'info' | 'warning' }) => {
  if (severity === 'info') {
    return (
      <svg fill={"currentColor"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoOutlinedIcon">
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"/>
      </svg>
    )
  }

  if (severity === 'success') {
    return (
      <svg fill={"currentColor"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SuccessOutlinedIcon">
        <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"/>
      </svg>
    )
  }

  if (severity === 'warning') {
    return (
      <svg fill={"currentColor"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WarningOutlinedIcon">
        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
      </svg>
    )
  }

  return (
    <svg fill={"currentColor"} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon">
      <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </svg>
  )
}
export default Alert
