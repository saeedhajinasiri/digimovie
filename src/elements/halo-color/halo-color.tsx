import React from 'react';
import {HaloColorProps} from "./halo-color.props";
import styled from '@emotion/styled'
import classNames from "../../utils/helpers/class-names";
import {COLORS} from "./halo-color.style";


const ColorDiv = styled(({height, mobileHeight, tabletWidth, tabletHeight, width, mobileWidth, top, left, bottom, right, ...props}: HaloColorProps) => <div {...props} />)`
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  @media only screen and (min-width: 1024px) {
    height: ${props => props.height};
    width: ${props => props.width};
  };
  @media (min-width: 640px) and (max-width: 1023px) {
    height: ${props => props.tabletHeight};
    width: ${props => props.tabletWidth};
  };
  @media (max-width: 639px) {
    height: ${props => props.mobileHeight};
    width: ${props => props.mobileWidth};
  }`

const HaloColor = ({children, className, color = 'primary', ...rest}: HaloColorProps) => {
  return (
    <ColorDiv
      className={classNames(
        `z-[2] absolute blur-2xl opacity-10`,
        COLORS[color],
        className
      )}
      {...rest}>
      {children}
    </ColorDiv>
  )
}

export default HaloColor;
