import {ReactNode} from "react";
import {TextProps} from "../../text/text.props";

export interface TableCellProps {
  children?: ReactNode

  color?: Colors

  size?: 'small' | 'medium' | 'large'

  className?: string

  variant?: 'head' | 'body' | 'footer';

  textProps?: Omit<TextProps, 'children'>
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
