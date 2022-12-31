export interface RadioButtonProps {
  color?: Colors

  className?: string

  disabled?: boolean

  checked?: boolean

  value?: string | number

  name: string

  onClick?: () => void

  size?: 'medium' | 'large'

}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'grey' | 'quaternary' | 'tertiary' | 'success' | 'info'