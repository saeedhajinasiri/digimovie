import {ReactNode} from "react";

export interface AnchorOriginProps {
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'right',
}

export interface BadgeProps {
  children: ReactNode

  badgeContent: number

  max?: number

  anchorOrigin?: AnchorOriginProps

  variant?: Variant;

  color?: Colors

  size?: Size

  shape?: Shape

  className?: string
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type Variant = 'standard' | 'dot';
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
export type Shape = "rectangle" | 'rounded'