import {ReactNode} from "react";

export interface AlertProps {
  severity?: 'danger' | 'success' | 'info' | 'warning'

  variant?: 'filled' | 'outlined'

  children: ReactNode

  className?: string

  onClose?: (event?: any) => void
}
