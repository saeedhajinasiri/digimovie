import {ReactNode, Ref} from "react";

export interface OptionItemProps {
  children?: ReactNode

  value?: string | number

  className?: string

  endAdornment?: ReactNode

  containerRef?: Ref<HTMLOptionElement>
}
