import {ReactNode} from "react";

export interface SnackbarProps {
  open: boolean

  onClose: () => void

  children: ReactNode

  anchorOrigin?: AnchorOriginProps

  autoHideDuration?: number
}

export interface AnchorOriginProps {
  vertical: 'top' | 'bottom';

  horizontal: 'left' | 'right';
}