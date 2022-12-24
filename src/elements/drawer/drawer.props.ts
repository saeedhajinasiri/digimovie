import {ReactNode} from "react";

export interface DrawerProps {
  anchor?: "left" | "right" | "bottom" | 'top'

  open: boolean

  onClose: () => void

  children: ReactNode

  className?: string
}