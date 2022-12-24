import {ReactNode} from "react";

export interface HaloColorProps {
  children?: ReactNode

  className?: string

  width?: string

  height?: string

  tabletHeight?: string

  mobileWidth?: string

  mobileHeight?: string

  tabletWidth?: string

  top?: string

  left?: string

  bottom?: string

  right?: string

  opacity?: any

  color?: Colors
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type ValidNumber = 96 | 80 | 72 | 64 | 60 | 56 | 52 | 48 | 44 | 40 | 36 | 32 | 28 | 24 | 20 | 18 | 14 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3.5 | 3 | 2.5 | 2 | 1.5 | 1 | 0;
