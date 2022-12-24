import {Typography} from "../text/text.props";

export interface RatingProps {
  value: number

  readOnly?: boolean

  size?: Typography

  onChange?: (event?: any) => void
}
