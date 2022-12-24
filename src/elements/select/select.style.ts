import {Variant} from "../button/button.props";

export const COLORS = {
  primary: 'bg-primary border-primary text-primary-dark active:bg-primary-light active:text-white',
  danger: 'bg-danger border-danger text-danger-dark active:bg-danger-light active:text-white',
  warning: 'bg-warning border-warning text-warning-dark active:bg-warning-light active:text-white',
  secondary: 'bg-secondary border-secondary text-secondary-dark active:bg-secondary-light active:text-white',
  control: 'bg-control border-control text-control-dark active:bg-control-dark active:text-white',
  purple: 'bg-purple border-purple text-purple-dark active:bg-purple-light active:text-white',
  tertiary: 'bg-tertiary border-tertiary text-tertiary-dark active:bg-tertiary-light active:text-white',
  success: 'bg-success border-success text-success-dark active:bg-success-light active:text-white',
  info: 'bg-info border-info text-info-dark active:bg-info-light active:text-white',
  inherit: 'bg-transparent hover:bg-transparent'
};

export const SIZES = {
  huge: 'h-14 md:h-16',
  large: 'h-12 md:h-14',
  medium: 'h-10 md:h-12',
  small: 'h-8 md:h-10',
  tiny: 'h-6 md:h-8',
  search: 'h-10 sm:h-16 md:h-20',
}

export const HOVER_COLORS = {
  primary: 'hover:bg-primary hover:text-white',
  danger: 'hover:bg-danger hover:text-white',
  warning: 'hover:bg-warning hover:text-white',
  secondary: 'hover:bg-secondary hover:text-white',
  control: 'hover:bg-control hover:text-white',
  purple: 'hover:bg-purple hover:text-white',
  tertiary: 'hover:bg-tertiary hover:text-white',
  success: 'hover:bg-success hover:text-white',
  info: 'hover:bg-info hover:text-white',
  inherit: 'bg-transparent hover:bg-transparent'
};

/**
 *
 * @param variants
 * @constructor
 */
export const VARIANTS = ({variants}: { variants: Variant }) => {
  if (variants === 'text') {
    return 'text-grey-light bg-transparent hover:bg-transparent inline'
  }
  if (variants === 'outlined') {
    return 'text-grey-light !bg-white border flex'
  }

  return `!text-white text-m-sm md:text-d-sm border-none bg-grey-light flex`
}
