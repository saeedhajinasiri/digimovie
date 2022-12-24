import {ReactNode} from "react";

export interface AppBarProps {
  children?: ReactNode

  className?: string

  position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined

  hasShadow?: boolean
}
