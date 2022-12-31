import React, {useEffect, useRef, useState} from 'react'
import {ToggleButtonGroupProps} from './toggle-button-group.props'

const ToggleButtonGroup = ({children, onChange, value, color = 'primary'}: ToggleButtonGroupProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState<number | null>(null)

  useEffect(() => {
    if (value && ref.current && children) {
      const pos = children.map(e => e.props.value).indexOf(value);
      ref.current.children[pos].className = `bg-${color} rounded`
      ref.current.children[pos].children[0].children[0].className = `font-sans-bold text-d-base text-white`
      setSelect(pos)
    }
  }, [ref.current])

  useEffect(() => {
    if (ref.current && ref.current.children) {
      ref.current.children[0].children[0].className = `${ref.current.children[0].children[0].className} border-l border-l-grey-300 rounded-l`
      ref.current.children[ref.current.childElementCount - 1].children[0].className = `${ref.current.children[ref.current.childElementCount - 1].children[0].className} rounded-r`
      for (let i = 0; i < ref.current.childElementCount; i++) {
        ref.current.children[i].addEventListener('click', () => {
          if (ref.current) {
            if (select != null) {
              ref.current.children[select].className = `bg-white rounded w-full`
              ref.current.children[select].children[0].children[0].className = `font-sans-bold text-d-base text-grey-500`
            }
            ref.current.children[i].className = `bg-${color} rounded w-full`
            ref.current.children[i].children[0].children[0].className = `font-sans-bold text-d-base text-white`
            setSelect(i)
            onChange(children[i].props.value)
          }
        })
      }
    }
  }, [select]);

  return (
    <div className={`flex w-full flex-1`} ref={ref}>
      {children}
    </div>
  )
}

export default ToggleButtonGroup