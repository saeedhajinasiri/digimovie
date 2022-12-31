import React from 'react'
import {TextFieldProps} from './text-field.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, PLACEHOLDER_POSITION, SHAPES, SIZES, TEXT_COLOR, VARIANTS} from './text-field.style'

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function CustomInput(
  {
    variant = 'outlined',
    className,
    placeholder,
    size = 'medium',
    color = 'tertiary',
    error = false,
    disabled = false,
    shape = 'standard',
    multiline = false,
    maxRows,
    searchField = false,
    placeholderPosition = 'right',
    textColor,
    inputClassName,
    type = 'text',
    maxLength,
    onChange,
    value,
    dir = 'rtl',
    helperText = undefined,
    endAdornment,
    startAdornment,
    containerRef,
    onFocus,
    ...rest
  }, ref) {

  if (multiline) {
    return (
      <div className={classNames(
        `flex w-full justify-center flex-row-reverse rounded sm:rounded-md md:rounded-lg h-auto text-m-base sm:text-d-xs md:text-d-base outline-none transition-colors duration-200`,
        disabled ? 'border-grey-300' : error ? 'border-danger' : COLORS[color],
        VARIANTS[variant],
        SHAPES[shape],
      )}>
        {startAdornment ? (
          <div className={'flex h-full items-center justify-center ml-1 bg-danger-dark'}>
            {startAdornment}
          </div>
        ) : null}
        <textarea
          rows={maxRows}
          dir={dir}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          className={classNames(
            `flex w-full resize-none rounded sm:rounded-md md:rounded-lg p-2 h-auto text-m-base sm:text-d-xs md:text-d-base placeholder-m-xs md:placeholder-d-xs outline-none transition-colors duration-200`,
            textColor ? TEXT_COLOR[textColor] : "",
            disabled ? 'text-grey-300' : '',
            inputClassName,
          )}
          {...rest}
        />
        {endAdornment ? (
          <div className={'flex h-full items-center justify-center mr-1'}>
            {endAdornment}
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`z-10 flex relative flex-col ${className}`}>
      <div ref={containerRef} className={classNames(
        `flex w-full rounded sm:rounded-md md:rounded-lg transition-colors duration-200 px-3`,
        SIZES[size],
        disabled ? 'border-grey-300' : error ? 'border-danger' : COLORS[color],
        VARIANTS[variant],
        inputClassName,
      )}>
        {startAdornment ? (
          <div className={'flex h-full items-center justify-center ml-1'}>
            {startAdornment}
          </div>
        ) : null}
        <input
          ref={ref}
          dir={dir}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          className={classNames(
            `flex w-full text-m-base sm:text-d-xs md:text-d-base outline-none bg-transparent ${placeholderPosition === 'center' ? 'text-center' : ''}`,
            PLACEHOLDER_POSITION[placeholderPosition],
            textColor ? TEXT_COLOR[textColor] : "",
            disabled ? 'text-grey-300' : '',
          )}
          {...rest}
        />
        {endAdornment ? (
          <div className={'flex h-full items-center justify-center mr-1'}>
            {endAdornment}
          </div>
        ) : null}
      </div>
      {helperText ? (
        <p className={"text-m-sm sm:text-t-sm md:text-d-sm text-danger mx-3 mt-1"}>
          {helperText}
        </p>
      ) : null}
    </div>
  )
})

export default TextField
