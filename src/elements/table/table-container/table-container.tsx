import React from 'react';
import Div from "../../div";
import {TableContainerProps} from "./table-container.props";
import classNames from "../../../utils/helpers/class-names";


const CustomTableCell = ({children, className, ...rest}: TableContainerProps) => {
  return (
    <Div
      className={classNames(
        className,
        "overflow-hidden w-full",
      )}
      {...rest}>
      {children}
    </Div>
  )
}

export default CustomTableCell;
