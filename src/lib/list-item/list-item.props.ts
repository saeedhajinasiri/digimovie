import {ReactNode} from "react";

export interface ListItemProps {

  children: ReactNode

  divider?: boolean

  className?: string

  onClick?: () => void

  disablePadding?: boolean

}
