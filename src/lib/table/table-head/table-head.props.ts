import {ReactNode} from "react";

export interface TableHeadProps {
  children?: ReactNode

  color?: Colors

  className?: string
}


export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
