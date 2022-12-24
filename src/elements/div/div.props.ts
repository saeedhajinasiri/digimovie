import {CSSProperties, ReactNode} from "react";

export interface DivProps {
  itemScope?: any
  itemType?: string
  itemProp?: string

  children?: ReactNode

  className?: string | undefined

  style?: CSSProperties | undefined;

  onClick?: any

  mobile?: "row" | "row-reverse" | "column" | "column-reverse"

  tablet?: "row" | "row-reverse" | "column" | "column-reverse"

  desktop?: "row" | "row-reverse" | "column" | "column-reverse"

  dangerouslySetInnerHTML?: any

  role?: string

  dir?: string

  id?: string

  ref?: any

  dataTestId?: string

  onMouseOver?: (event: any) => void

  onMouseLeave?: () => void
}
