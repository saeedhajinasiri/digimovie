import {FontColor, Shape, Size, Variant} from './button.props'

export const SIZES = {
  huge: 'h-14 md:h-16',
  large: 'h-12 md:h-14',
  medium: 'h-10 md:h-12',
  small: 'h-8 md:h-10',
  tiny: 'h-6 md:h-8',
};

export const COLORS = {
  primary: 'bg-primary border-primary text-primary hover:bg-primary-dark active:bg-primary-light active:text-white',
  danger: 'bg-danger border-danger text-danger hover:bg-danger-dark active:bg-danger-light active:text-white',
  warning: 'bg-warning border-warning text-warning hover:bg-warning-dark active:bg-warning-light active:text-white',
  secondary: 'bg-secondary border-secondary text-secondary hover:bg-secondary-dark active:bg-secondary-light active:text-white',
  control: 'bg-control border-control text-control hover:bg-control-transparent active:bg-control-dark active:text-white',
  purple: 'bg-purple border-purple text-purple hover:bg-purple-dark active:bg-purple-light active:text-white',
  tertiary: 'bg-tertiary border-tertiary text-tertiary hover:bg-tertiary-dark active:bg-tertiary-light active:text-white',
  success: 'bg-success border-success text-success hover:bg-success-dark active:bg-success-light active:text-white',
  info: 'bg-info border-info text-info hover:bg-info-dark active:bg-info-light active:text-white',
  inherit: 'bg-transparent hover:bg-transparent'
};

/**
 *
 * @param disabled
 * @param variants
 * @param color
 * @constructor
 */
export const VARIANTS = ({disabled, variants, color}: { disabled: boolean, variants: Variant, color: FontColor }) => {
  if (disabled && variants === 'text') {
    return 'text-grey-light bg-transparent hover:bg-transparent inline'
  }
  if (disabled && variants === 'outlined') {
    return 'text-grey-light border-grey-light border flex'
  }
  if (disabled && variants === 'contained') {
    return `!text-white text-m-sm md:text-d-sm border-none bg-grey-light flex`
  }
  if (!disabled && variants === 'text') {
    return 'bg-transparent border-none hover:bg-transparent hover:text-white inline'
  }
  if (!disabled && variants === 'outlined') {
    return 'border bg-transparent hover:text-white flex'
  }
  if (!disabled && variants === 'contained') {
    return `${color === "black" ? 'text-black' : '!text-white'} text-m-sm border-none hover:text-white md:text-d-sm flex`
  }
}

/**
 *
 * @param size
 * @param shape
 * @constructor
 */
export const SHAPES = ({size, shape}: { size: Size, shape: Shape }) => {
  let className = 'rounded-lg';
  if (shape === 'rounded' || shape === 'circle') {
    className = 'rounded-full'
  }
  if (size === 'small') {
    className = `max-w-8 min-w-8 md:max-w-10 md:min-w-10 p-0 ${className}`;
  } else if (size === 'medium') {
    className = `max-w-10 min-w-10 md:max-w-12 md:min-w-12 p-0 ${className}`;
  } else if (size === 'large') {
    className = `max-w-12 min-w-12 md:max-w-14 md:min-w-14 p-0 ${className}`;
  } else if (size === 'huge') {
    className = `max-w-14 min-w-14 md:max-w-16 md:min-w-16 p-0 ${className}`;
  }
  return className;
}
