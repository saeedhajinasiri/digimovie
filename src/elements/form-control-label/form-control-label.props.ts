import {ReactNode, Ref} from "react";

export interface FormControlLabelProps {
  children?: ReactNode

  label: string

  className?: string

  endAdornment?: ReactNode

  containerRef?: Ref<HTMLLabelElement>

}
