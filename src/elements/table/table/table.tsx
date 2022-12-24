import React from 'react';
import {TableProps} from './table.props'
import classNames from "../../../utils/helpers/class-names";

const Table = ({children, className, ...rest}: TableProps) => {
  return (
    <table dir={"rtl"} className={classNames('w-full', className)} {...rest}>{children}</table>
  )
}

export default Table;
