import React from 'react'
import {CheckboxProps} from './checkbox.props'
import {COLORS, SIZES} from './checkbox.style'
import classNames from "../../utils/helpers/class-names";

const Checkbox = ({color = 'primary', className, onChange, checked, disabled = false, size = 'medium', ...rest}: CheckboxProps) => {

  return (
    <input
      onChange={onChange}
      checked={checked}
      disabled={disabled}
      className={classNames(
        'h-5 w-5 rounded-sm sm:rounded cursor-pointer',
        COLORS[color],
        SIZES[size],
        className,
      )}
      type={'checkbox'}
      {...rest}
    />
  )
}

export default Checkbox
