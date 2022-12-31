import React from 'react';
import CustomRadioButton from '../../lib/radio-button/radio-button'
import {RadioButtonProps} from "../../lib/radio-button/radio-button.props";

/**
 * Primary UI component for user interaction
 */
export const RadioButton = (props: RadioButtonProps) => {
  return (
    <CustomRadioButton {...props}/>
  );
};
