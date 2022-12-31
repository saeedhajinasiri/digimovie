import React, {forwardRef} from 'react';
import {DivProps} from './div.props'

const Div = forwardRef<any, DivProps>(function Div(props, ref) {
  const {children, style, onClick, mobile, tablet, desktop, dangerouslySetInnerHTML, dataTestId, role, id, onMouseOver, onMouseLeave, ...rest} = props;


  return (
    <div
      data-testid={dataTestId}
      id={id}
      role={role}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      onClick={onClick}
      style={style}
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </div>
  )
})

Div.defaultProps = {
  dataTestId: 'div-test-id',
}

export default Div;
