export const COLORS = {
  primary: 'bg-primary',
  danger: 'bg-danger',
  warning: 'bg-warning',
  secondary: 'bg-secondary',
  control: 'bg-control',
  purple: 'bg-purple',
  tertiary: 'bg-tertiary',
  success: 'bg-success',
  info: 'bg-info',
  inherit: 'bg-primary'
};


/**
 *
 * @param top
 * @param right
 * @param bottom
 * @param left
 *
 * @constructor
 */
export const POSITIONS = ({top, right, bottom, left}: { top?: string, right?: string, bottom?: string, left?: string }) => {
  let className = '';
  if (top) {
    className += `top-[${top}]`;
  }
  if (right) {
    className += ` right-[${right}]`;
  }
  if (bottom) {
    className += ` bottom-[${bottom}]`;
  }
  if (left) {
    className += ` left-[${left}]`;
  }

  return className;
}

/**
 *
 * @param width
 * @param height
 * @param tabletWidth
 * @param tabletHeight
 * @param mobileWidth
 * @param mobileHeight
 *
 * @constructor
 */
export const SIZES = ({width, height, tabletWidth, tabletHeight, mobileWidth, mobileHeight}: { width?: string, height?: string, tabletWidth?: string, tabletHeight?: string, mobileWidth?: string, mobileHeight?: string }) => {
  if (mobileWidth && mobileHeight) {
    return `width: ${mobileWidth} height: ${mobileHeight}`;
  }
  if (tabletWidth && tabletHeight) {
    return `sm:w-[${tabletWidth}] sm:h-[${tabletHeight}]`;
  }
  if (width && height) {
    return `md:w-[${width}] md:h-[${height}]`;
  }

  return null;
}
