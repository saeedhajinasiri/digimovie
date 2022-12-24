import React from 'react';
import {TableRowCustomProps} from './table-row.props'
import classNames from "../../../utils/helpers/class-names";
import {COLORS} from "./table-row.style";


const TableRow = ({children, className, hasBorder = true, color = 'tertiary', ...rest}: TableRowCustomProps) => {
  return (
    <tr
      className={classNames(
        hasBorder ? 'border-b border-grey-100' : "",
        "bg-opacity-20",
        COLORS[color],
        className
      )}
      {...rest}>
      {children}
    </tr>
  )
}

export default TableRow;
