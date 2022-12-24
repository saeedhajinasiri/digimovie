import {Colors, Sizes} from './switch-box.props'

export const CHECKED = (checked: boolean, color: Colors, size: Sizes) => {

  if (checked) {
    return `${COLORS[color]} ${SIZES[size]}`
  }
  return `${SIZES[size]} bg-grey-500 before:-translate-x-[26px]`
};

export const COLORS = {
  primary: 'bg-primary',
  danger: 'bg-danger',
  warning: 'bg-warning',
  secondary: 'bg-secondary',
  control: 'bg-control',
  purple: 'bg-purple',
  tertiary: 'bg-tertiary',
  success: 'bg-success',
  info: 'bg-info',
  inherit: 'bg-primary'
};

export const SIZES = {
  large: 'before:h-[26px] before:w-[26px] rounded-[34px]',
  medium: 'before:h-[20px] before:w-[20px] rounded-[28px]',
  small: 'before:h-[14px] before:w-[14px] rounded-[22px]',
}

export const LABEL_SIZES = {
  large: 'w-[60px] h-[34px]',
  medium: 'w-[54px] h-[28px]',
  small: 'w-[48px] h-[22px]',
}
