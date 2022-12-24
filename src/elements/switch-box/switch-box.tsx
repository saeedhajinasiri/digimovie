import React from 'react';
import {CHECKED, LABEL_SIZES} from './switch-box.style'
import classNames from "../../utils/helpers/class-names";
import {SwitchBoxProps} from './switch-box.props'

export const SwitchBox = ({color = 'info', size = 'medium', value, onChange}: SwitchBoxProps) => {

  return (
    <label className={classNames(
      "relative inline-block",
      LABEL_SIZES[size],
    )}>
      <input checked={value} onChange={onChange} className={"w-0 h-0 opacity-0 focus:shadow-md checked:-translate-x-[26px]"} type="checkbox"/>
      <span
        className={classNames(
          `absolute before:rounded-full cursor-pointer top-0 right-0 left-0 bottom-0 transition duration-500 before:absolute before:right-1 before:bottom-1 before:bg-white before:transition before:duration-500 before:content-['']`,
          CHECKED(value, color, size)
        )}/>
    </label>
  )
}

export default SwitchBox;

