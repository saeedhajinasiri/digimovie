import {AnchorOriginProps, Shape, Size, Variant} from './badge.props'

export const COLORS = {
  primary: 'bg-primary border-primary text-primary hover:bg-primary-dark',
  danger: 'bg-danger border-danger text-danger hover:bg-danger-dark',
  warning: 'bg-warning border-warning text-warning hover:bg-warning-dark',
  secondary: 'bg-secondary border-secondary text-secondary hover:bg-secondary-dark',
  control: 'bg-control border-control text-control hover:bg-control-transparent',
  purple: 'bg-purple border-purple text-purple hover:bg-purple-dark',
  tertiary: 'bg-tertiary border-tertiary text-tertiary hover:bg-tertiary-dark',
  success: 'bg-success border-success text-success hover:bg-success-dark',
  info: 'bg-info border-info text-info hover:bg-info-dark',
  inherit: 'bg-primary border-primary text-primary hover:bg-primary-dark hover:text-primary'
};

/**
 *
 * @param size
 * @param shape
 * @param variant
 * @constructor
 */
export const SHAPES = ({size, shape, variant}: { size: Size, shape: Shape, variant: Variant }) => {
  if (variant === 'dot') {
    return 'w-2 h-2 p-0 rounded-full';
  }
  let className = 'rounded-lg';
  if (shape === 'rounded') {
    className = 'rounded-full'
  }
  if (size === 'small') {
    className = `min-w-[16px] h-4 p-0 px-1 ${className}`;
  } else if (size === 'medium') {
    className = `min-w-[20px] h-5 p-0 px-1 ${className}`;
  } else if (size === 'large') {
    className = `min-w-[24px] h-6 p-0 px-1 ${className}`;
  }

  return className;
}

/**
 *
 * @param vertical
 * @param horizontal
 * @constructor
 */
export const POSITIONS = ({vertical, horizontal}: AnchorOriginProps) => {
  let translateYClassname = 'translate-y-1/2';
  let translateXClassname = 'translate-x-1/2';
  if (vertical === 'top') {
    translateYClassname = 'translate-y-[-50%]';
  }
  if (horizontal === 'left') {
    translateXClassname = 'translate-x-[-50%]';
  }
  return `${vertical}-0 ${horizontal}-0 ${translateYClassname} ${translateXClassname}`;
}
