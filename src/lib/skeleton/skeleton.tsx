import React from 'react';
import {SkeletonProps} from './skeleton.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, SHAPES, SIZES} from "./skeleton.style";

const Skeleton = ({className, shape = 'rectangular', size = 'medium', color = "tertiary", ...rest}: SkeletonProps) => {
  return (
    <div
      role="status"
      className={classNames(
        className,
        "dark:bg-gray-700 animate-pulse",
        color ? COLORS[color] : 'bg-tertiary cursor-default border-tertiary',
        size ? SIZES[size] : 'h-fit',
        SHAPES({shape: shape, size: size}),
      )}
      {...rest}
    />
  )
}

export default Skeleton;
