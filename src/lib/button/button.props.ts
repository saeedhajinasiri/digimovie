import {ReactNode} from "react";

export interface ButtonProps {
  children?: ReactNode

  color?: Colors

  size?: Size

  variant?: Variant

  shape?: Shape

  className?: string

  onClick?: (event?: any) => void

  onTouchStart?: (event?: any) => void

  onTouchEnd?: (event?: any) => void

  onMouseDown?: (event?: any) => void

  onMouseUp?: (event?: any) => void

  type?: "button" | "submit" | "reset"

  disabled?: boolean

  loading?: boolean

  style?: any

  icon?: ReactNode

  fontType?: 'bold' | 'regular'

  fontColor?: FontColor

  href?: any

  dataTestId?: string
}


export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type Variant = 'text' | 'outlined' | 'contained';
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
export type Shape = "circle" | "square" | "rectangle" | 'rounded'
export type FontColor = 'white' | 'black'
