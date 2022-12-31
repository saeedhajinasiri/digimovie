import React from 'react';
import CustomButton from '../../lib/button/button'
import {ButtonProps} from "../../lib/button/button.props";

/**
 * Primary UI component for user interaction
 */
export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <CustomButton{...props}>
      {children}
    </CustomButton>
  );
};
