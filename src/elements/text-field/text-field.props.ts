import {ReactNode, Ref} from "react";

export interface TextFieldProps {
  variant?: 'outlined' | 'filled'

  className?: string

  placeholder?: string

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'search'

  color?: "primary" | "secondary" | "success" | "danger" | "info" | "warning" | "tertiary" | "control"

  shape?: 'round' | 'standard'

  error?: boolean

  helperText?: string | undefined

  disabled?: boolean

  multiline?: boolean

  maxRows?: number

  searchField?: boolean

  placeholderPosition?: 'center' | 'right'

  textColor?: 'grey' | 'black'

  inputClassName?: string

  type?: 'password' | 'number' | 'email' | 'text' | 'search' | 'submit' | 'tel' | 'url' | 'reset'

  maxLength?: number

  onChange?: (e: any) => void

  value?: string

  dir?: 'rtl' | 'ltr' | 'auto'

  endAdornment?: ReactNode

  startAdornment?: ReactNode

  containerRef?: Ref<HTMLDivElement>

  onFocus?: (e?: any) => void
}
