import React from 'react'
import classNames from "../../../utils/helpers/class-names";

const CustomAccordionDetails = ({children, className, ...rest}: any) => {
  return (
    <div className={classNames(
      `bg-control`,
      className,
    )} {...rest}>
      {children}
    </div>
  )
}


export default CustomAccordionDetails;
