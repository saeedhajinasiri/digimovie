import {CSSProperties} from "react";

export interface TextProps {
  itemProp?: string

  children: any

  variant?: Variants

  className?: string

  typography?: Typography

  color?: Colors

  align?: Align

  type?: Types

  style?: CSSProperties

  disabled?: boolean

  dataTestId?: string
}

export type Variants = "p" | "body" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
export type Typography = 'tiny' | 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'huge'
export type Colors = "inherit" | "primary" | "secondary" | "tertiary" | "control" | "success" | "info" | "danger" | "warning" | "purple" |
  "grey.100" | "grey.200" | "grey.300" | "grey.400" | "grey.500" | "grey.600" | "grey.700" | "grey.800" | "grey.900" | undefined
export type Align = 'right' | 'left' | 'center' | 'justify' | 'start' | 'end' | 'inherit'
export type Types = "medium" | "bold" | "light" | "regular"
