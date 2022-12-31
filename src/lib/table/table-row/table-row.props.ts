import {ReactNode} from "react";

export interface TableRowCustomProps {
  children?: ReactNode

  color?: Colors

  backgroundColor?: Colors

  className?: string

  hasBorder?: boolean
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
