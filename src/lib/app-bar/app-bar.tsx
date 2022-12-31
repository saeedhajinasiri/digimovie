import React from 'react';
import classNames from "../../utils/helpers/class-names";
import {AppBarProps} from "./app-bar.props";

export const CustomAppBar = (props: AppBarProps) => {
  const {children, className, position = 'relative', ...rest} = props;

  return (
    <header
      className={classNames(
        className,
        'flex flex-col w-full z-[1000] top-0 right-0 left-auto',
        position ? `position: ${position}` : ""
      )}
      {...rest}>
      {children}
    </header>
  );
}

export default CustomAppBar;

