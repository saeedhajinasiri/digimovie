import React from 'react';
import {CurveContainerProps} from "./curve-container.props";
import classNames from "../../utils/helpers/class-names";
import Div from "../div";


const CurveContainer = ({gray, children, firstContainer, lastContainer, column, className}: CurveContainerProps) => {
  return (
    <Div className={classNames(gray ? 'bg-white' : 'bg-grey-50', className)}>
      <Div className={classNames(
        'w-full flex relative',
        gray ?
          'bg-grey-50 rounded-bl-[50px] rounded-tl-[50px] sm:rounded-bl-[90px] sm:rounded-tl-[90px] md:rounded-bl-[130px] md:rounded-tl-[130px]' :
          'bg-white rounded-br-[50px] rounded-tr-[50px] sm:rounded-br-[90px] sm:rounded-tr-[90px] md:rounded-br-[130px] md:rounded-tr-[130px]',
        column ? 'flex-col' : 'flex-row-reverse',
        firstContainer ? '!rounded-tr-none' : '',
        lastContainer ? '!rounded-br-none !rounded-bl-none' : '',
      )}>
        {children}
      </Div>
    </Div>
  )
}

export default CurveContainer;
