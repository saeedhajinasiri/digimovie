export interface SelectProps {
  optionsList: Array<any>

  defaultText?: string

  value: string

  onChange: (newValue: any) => void

  id: number | string

  text: string

  disabled?: boolean

  variant?: Variant

  color?: Colors

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'search'
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type Variant = 'text' | 'outlined' | 'contained';
