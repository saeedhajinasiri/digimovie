import {AnchorOriginProps} from './snackbar.props'

export const ANCHOR_ORIGIN = ({vertical, horizontal}: AnchorOriginProps) => {
  return `${vertical}-6 ${horizontal}-6`
};