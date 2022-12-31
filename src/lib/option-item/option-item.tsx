import React from 'react'
import classNames from "../../utils/helpers/class-names";
import {OptionItemProps} from "./option-item.props";

const OptionItem = (props: OptionItemProps) => {
  const {className, children, containerRef, ...rest} = props;

  return (
    <option ref={containerRef} className={classNames('appearance-none text-info w-full cursor-pointer', className)} {...rest} {...rest}>
      {children}
    </option>
  )
}

export default OptionItem
