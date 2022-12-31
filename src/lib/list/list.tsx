import React from 'react';
import {ListProps} from './list.props'
import classNames from "../../utils/helpers/class-names";

const List = (props: ListProps) => {

  const {children, className, ...rest} = props;

  return (
    <ul className={classNames(
      'list-none py-2',
      className,
    )} {...rest}>
      {children}
    </ul>
  )
}

export default List