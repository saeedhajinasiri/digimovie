import {ReactNode} from "react";

export interface AccordionSummaryProps {
  children?: ReactNode

  color?: Colors

  style?: any

  size?: Size

  className?: string

  disabled?: boolean

  onClick?: () => void

  expandIcon?: ReactNode | null
}


export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type Size = 'auto' | 'small' | 'medium' | 'large';
