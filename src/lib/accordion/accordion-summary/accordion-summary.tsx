import React from 'react'
import classNames from "../../../utils/helpers/class-names";
import {COLORS, SIZES} from "./accordion-summary.style";
import {AccordionSummaryProps} from './accordion-summary.props'


const CustomAccordionSummary = ({children, className, color = 'secondary', size = 'medium', style, onClick, expandIcon = null, ...rest}: AccordionSummaryProps) => {
  return (
    <div onClick={onClick} style={style} className={classNames(
      `flex flex-row-reverse items-center justify-center cursor-pointer hover:transition hover:duration-300 hover:ease-in-out`,
      COLORS[color],
      SIZES[size],
      className,
    )} id={'accordion-summary'} {...rest}>
      {children}
      {expandIcon}
    </div>
  )
}

export default CustomAccordionSummary;
