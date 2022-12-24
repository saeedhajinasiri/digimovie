export interface SwitchBoxProps {
  color?: Colors,

  size?: Sizes,

  value: boolean,

  onChange?: () => void
}


export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type Sizes = 'small' | 'medium' | 'large'
