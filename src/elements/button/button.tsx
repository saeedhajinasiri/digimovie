import React from 'react'
import {ButtonProps} from './button.props'
import classNames from '../../utils/helpers/class-names'
import {COLORS, SHAPES, SIZES, VARIANTS} from './button.style'


const Loading = () => {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="grey" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
}

/**
 *
 * @param children
 * @param color
 * @param size
 * @param variant
 * @param shape
 * @param className
 * @param onClick
 * @param type
 * @param disabled
 * @param loading
 * @param style
 * @param icon
 * @param rest
 * @param fontType
 * @param fontColor
 * @param href
 * @param dataTestId
 * @constructor
 */
export const Button = (
  {
    children,
    color = "info",
    size = 'medium',
    variant = 'contained',
    shape = 'rectangle',
    className,
    onClick,
    type,
    disabled = false,
    loading = false,
    style,
    icon,
    fontType = 'bold',
    fontColor = 'white',
    href,
    dataTestId,
    ...rest
  }: ButtonProps) => {

  const Children = loading ? <Loading/> : (icon ? icon : children);

  if (href && !disabled) {
    return (
      <a
        href={href}
        dir={"ltr"}
        data-testid={dataTestId}
        onClick={onClick}
        type={type}
        style={style}
        className={classNames(
          `${fontType === 'bold' ? 'font-sans-bold' : 'font-sans-regular'} flex-row-reverse items-center justify-center hover:transition hover:duration-150 hover:ease-in-out ${icon ? 'px-0' : 'px-2'} z-[4]`,
          disabled ? 'bg-tertiary cursor-default border-tertiary' : COLORS[color],
          icon ? 'h-fit w-fit' : SIZES[size],
          icon ? 'bg-transparent border-none flex' : VARIANTS({disabled: disabled, variants: variant, color: fontColor}),
          SHAPES({shape: shape, size: size}),
          className,
        )}
        {...rest}>
        {Children}
      </a>
    )
  }

  return (
    <button
      data-testid={dataTestId}
      onClick={onClick}
      dir={"ltr"}
      type={type}
      disabled={disabled}
      style={style}
      className={classNames(
        `${fontType === 'bold' ? 'font-sans-bold' : 'font-sans-regular'} flex flex-row-reverse items-center justify-center hover:transition hover:duration-150 hover:ease-in-out ${icon ? 'px-0' : 'px-2'} z-[4]`,
        disabled ? 'bg-tertiary cursor-default border-tertiary' : COLORS[color],
        icon ? 'h-fit w-fit' : SIZES[size],
        icon ? 'bg-transparent border-none' : VARIANTS({disabled: disabled, variants: variant, color: fontColor}),
        SHAPES({shape: shape, size: size}),
        className,
      )}
      {...rest}>
      {Children}
    </button>
  )
}

export default Button
