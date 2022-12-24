import React from 'react';
import {FormControlProps} from "./form-control.props"

const FormControl = (props: FormControlProps) => {
  const {className, children, ...rest} = props;

  return (
    <fieldset className={className} {...rest}>
      {children}
    </fieldset>
  )
}

export default FormControl
