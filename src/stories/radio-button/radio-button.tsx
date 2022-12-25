import React from 'react';
import CustomRadioButton from '../../elements/radio-button/radio-button'
import {RadioButtonProps} from "../../elements/radio-button/radio-button.props";

/**
 * Primary UI component for user interaction
 */
export const RadioButton = (props: RadioButtonProps) => {
  return (
    <CustomRadioButton {...props}/>
  );
};
