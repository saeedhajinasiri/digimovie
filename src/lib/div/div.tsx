import React, {forwardRef} from 'react';
import {DivProps} from './div.props'
import styles from './div.module.css'

const Div = forwardRef<any, DivProps>(function Div(props, ref) {
  const {children, className = '', style, onClick, mobile, tablet, desktop, dangerouslySetInnerHTML, dataTestId, role, id, onMouseOver, onMouseLeave, ...rest} = props;

  const desktopDirection = desktop ? `${styles[`${desktop}DesktopClass`]}` : ``;
  const tabletDirection = tablet ? `${styles[`${tablet}TabletClass`]}` : ``;
  const mobileDirection = mobile ? `${styles[`${mobile}MobileClass`]}` : ``;

  return (
    <div
      data-testid={dataTestId}
      id={id}
      role={role}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      onClick={onClick}
      style={style}
      className={`${styles.defaultClass} ${desktopDirection} ${tabletDirection} ${mobileDirection} ${className}`}
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
