import React from 'react'
import {RadioButtonProps} from './radio-button.props'
import {COLORS, SIZES} from './radio-button.style'
import classNames from "../../utils/helpers/class-names";

const RadioButton = ({color = 'primary', value, name, size = 'medium', className, disabled = false, checked, onClick, ...rest}: RadioButtonProps) => {
  return (
    <input
      checked={checked}
      onClick={onClick}
      name={name}
      value={value}
      disabled={disabled}
      className={
        classNames(
          `cursor-pointer rounded-full mr-4`,
          disabled && !checked ? 'accent-grey' : `checked:appearance-none ${COLORS[color]}`,
          className,
          SIZES[size],
        )
      }
      type={'radio'}
      {...rest}
    />
  )
}

export default RadioButton