import {ChangeEvent, ReactNode} from "react";

export interface RadioGroupProps {
  children?: ReactNode

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  value?: string

  className?: string
}
