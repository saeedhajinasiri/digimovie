export interface SkeletonProps {
  className?: string

  size?: Size

  color?: Colors

  shape?: Shape
}

export type Colors = 'primary' | 'warning' | 'danger' | 'secondary' | 'control' | 'purple' | 'tertiary' | 'success' | "info" | "inherit"
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
export type Shape = "rectangular" | 'rounded' | 'circle'
