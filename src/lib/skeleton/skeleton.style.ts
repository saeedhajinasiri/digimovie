import {Shape, Size} from "./skeleton.props";

export const SIZES = {
  huge: 'h-14 md:h-16',
  large: 'h-12 md:h-14',
  medium: 'h-10 md:h-12',
  small: 'h-8 md:h-10',
  tiny: 'h-4 md:h-4',
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
  inherit: 'bg-primary border-primary text-primary hover:bg-primary-dark hover:text-primary active:bg-primary-light active:text-white'
};

export const SHAPES = ({size, shape}: { size: Size, shape: Shape }) => {
  let className = 'rounded';
  if (shape === 'rounded' || shape === 'circle') {
    className = 'rounded-full'
  }
  if (size === 'tiny') {
    className = `max-w-4 min-w-4 p-0 ${className}`;
  } else if (size === 'small') {
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

