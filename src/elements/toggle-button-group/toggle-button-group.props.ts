export interface ToggleButtonGroupProps {
  children: Array<any>

  onChange: (newValue: string) => void

  value: string

  color: Colors
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
