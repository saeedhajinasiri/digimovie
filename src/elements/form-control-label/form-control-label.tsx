import React, {forwardRef} from 'react';
import {FormControlLabelProps} from './form-control-label.props'
import Text from "../text";
import classNames from "../../utils/helpers/class-names";

const FormControlLabel = forwardRef<any, FormControlLabelProps>(function FormControlLabel(props, ref) {
  const {className, label, children, containerRef} = props;

  return (
    <label
      className={classNames(
        'cursor-pointer',
        className
      )}
      ref={containerRef}>
      <Text type={"medium"} typography={"lg"} className={'grow-[0.5]'}>{label}</Text>
      {children}
    </label>
  )
})

export default FormControlLabel;
