import React, {forwardRef} from 'react';
import {RadioGroupProps} from './radio-group.props'
import Div from "../div";

const RadioGroup = forwardRef<any, RadioGroupProps>(function RadioGroup(props, ref) {
  const {children, className, onChange, value, ...rest} = props;
  return (
    <Div
      desktop={"column"}
      onClick={onChange}
      data-value={value}
      className={className}
      ref={ref}
      {...rest}
    >
      {children}
    </Div>
  )
})

export default RadioGroup;