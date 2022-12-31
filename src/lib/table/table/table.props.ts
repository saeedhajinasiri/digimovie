import {ReactNode} from "react";

export interface TableProps {
  children?: ReactNode

  color?: Colors

  className?: string

  stickyHeader?: boolean
}


export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
