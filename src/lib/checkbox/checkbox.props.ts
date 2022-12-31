import {ChangeEvent} from "react";

export interface CheckboxProps {
  color?: Colors

  className?: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  checked?: boolean

  disabled?: boolean

  size?: 'small' | 'medium' | 'large'
}

export type Colors = 'primary' | 'info' | 'warning' | 'danger' | 'secondary' | 'grey' | 'quaternary' | 'tertiary' | 'success'
