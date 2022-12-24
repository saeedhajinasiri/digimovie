import React from 'react';
import {ListItemProps} from './list-item.props'
import classNames from "../../utils/helpers/class-names";

const ListItem = (props: ListItemProps) => {

  const {children, divider = false, onClick, disablePadding = false, className, ...rest} = props;

  return (
    <li className={classNames(
      'w-full relative flex flex-row-reverse items-center justify-start',
      divider ? 'border-b border-tertiary' : 'border-none',
      disablePadding ? 'p-0' : 'px-4 py-2',
      className,
    )}
        onClick={onClick} {...rest}>
      {children}
    </li>
  )
}

export default ListItem

