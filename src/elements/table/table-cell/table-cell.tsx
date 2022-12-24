import React from 'react';
import Text from '../../text';
import {TableCellProps} from './table-cell.props'
import classNames from "../../../utils/helpers/class-names";
import {COLORS, SIZES} from "./table-cell.style";


const TableCell = ({children, className, variant, size = 'small', color = 'tertiary', textProps, ...rest}: TableCellProps) => {
  const Component = variant === 'head' ? "th" : "td";

  return (
    <Component
      className={classNames(
        className,
        "px-4 bg-opacity-20 min-w-[125px]",
        COLORS[color],
        SIZES[size]
      )}
      {...rest}
    >
      <Text color={'grey.900'} type={'bold'} {...textProps}>{children}</Text>
    </Component>
  )
}

TableCell.defaultProps = {
  variant: 'body',
  size: 'small',
}

export default TableCell;
