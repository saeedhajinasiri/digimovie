import React from 'react';
import {BadgeProps} from './badge.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, POSITIONS, SHAPES} from "./badge.style";
import Text from "../text";


export const Badge = (props: BadgeProps) => {
  const {
    children,
    variant = 'standard',
    badgeContent,
    max = badgeContent,
    color = "info",
    size = 'medium',
    shape = 'rounded',
    className,
    anchorOrigin = {vertical: 'top', horizontal: 'right'}} = props;

  const content = variant !== 'dot' ? (max < badgeContent ? `${max}+` : badgeContent) : "";
  return (
    <div className={classNames('inline-flex relative shrink-0', className)}>
      {children}
      <Text
        color={"control"}
        typography={"xxs"}
        className={classNames(
          'z-index[4] flex flex-wrap flex-row-reverse justify-center content-center items-center absolute align-middle scale-100',
          COLORS[color],
          SHAPES({shape: shape, size: size, variant: variant}),
          POSITIONS(anchorOrigin)
        )}>{content}</Text>
    </div>
  )
};

export default Badge;
