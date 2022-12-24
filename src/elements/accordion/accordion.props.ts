import {ReactNode} from "react";
import {DivProps} from "../div/div.props";

export interface AccordionProps extends DivProps {
  icon?: ReactNode;

  disabled?: boolean;

  children: ReactNode;

  color?: Colors

  className?: string;

  defaultExpanded?: boolean;

  expanded?: boolean;

}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info"

export interface AccordionElementTagNameMap {
  "firstChild": HTMLDivElement;
  "lastChild": HTMLDivElement;
}
