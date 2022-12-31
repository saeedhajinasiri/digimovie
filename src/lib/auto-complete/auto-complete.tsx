import React from 'react'

interface AutoCompleteProps {
  options?: any
  renderInput?: any
  className?: string
  value?: string | null
  defaultValue?: string | null
  onChange?: any
  inputValue?: any
  onInputChange?: any
  onSelect?: () => {}
  getOptionLabel?: () => {}
  renderOption?: any
}


const AutoComplete = (props: AutoCompleteProps) => {
  const {renderInput, options, className, value, onChange, onInputChange, inputValue, defaultValue, onSelect, getOptionLabel, ...rest} = props;

  return null;
  /*return (
    <CssAutoComplete
      PopperComponent={StyledPopper}
      inputValue={inputValue}
      onInputChange={onInputChange}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
      freeSolo
      disableClearable
      options={options}
      renderInput={renderInput}
      {...rest}
    />
  )*/
}

AutoComplete.defaultProps = {
  renderInput: () => {
  },
}


export default AutoComplete
