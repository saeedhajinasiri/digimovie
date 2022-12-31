import React from 'react';
import {HaloColorProps} from "./halo-color.props";
import classNames from "../../utils/helpers/class-names";
import {COLORS} from "./halo-color.style";


const HaloColor = ({children, className, color = 'primary', ...rest}: HaloColorProps) => {
  return (
    <div
      className={classNames(
        `z-[2] absolute blur-2xl opacity-10`,
        COLORS[color],
        className
      )}
      {...rest}>
      {children}
    </div>
  )
}

export default HaloColor;
