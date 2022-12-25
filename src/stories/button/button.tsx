import React from 'react';
import CustomButton from '../../elements/button/button'
import {ButtonProps} from "../../elements/button/button.props";

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
