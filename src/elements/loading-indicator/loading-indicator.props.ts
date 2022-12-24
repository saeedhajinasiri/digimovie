export interface LoadingIndicatorProps {
  color?: Colors

  className?: string

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'grey' | 'quaternary' | 'tertiary' | 'success' | 'info'
