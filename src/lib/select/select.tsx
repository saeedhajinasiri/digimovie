import React, {useEffect, useRef, useState} from "react";
import {SelectProps} from './select.props'
import classNames from "../../utils/helpers/class-names";
import {COLORS, HOVER_COLORS, SIZES, VARIANTS} from "./select.style";


const Select = ({defaultText, optionsList, value, onChange, id, text, color = 'tertiary', variant = 'outlined', disabled = false, size = 'medium'}: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState<string>(defaultText || 'انتخاب کنید')
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (value) {
      let val = optionsList.find((item) => {
        if (item[id] == value) {
          return item[text]
        }
      });
      setSelectedText(val[text] || (defaultText || 'انتخاب کنید'))
    } else {
      setSelectedText(defaultText || 'انتخاب کنید')
    }
  }, [value])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShow(false)
    }
  };

  const handleListDisplay = () => {
    setShow(prevState => !prevState)
  };

  const handleOptionClick = (e: any) => {
    setShow(false)
    setSelectedText(e.target.innerText)
    onChange(e.target.getAttribute("data-name"))
  };

  return (
    <div ref={wrapperRef} className={'inline-block text-right relative z-40'}>
      <div
        className={classNames(
          "flex items-center justify-end cursor-pointer px-3 rounded sm:rounded-md md:rounded-lg",
          show ? "after:top-2" : "after:content-[''] after:absolute after:z-40 after:right-[10px] after:top-4 after:pt-3 after:border-[7px] after:border-transparent",
          COLORS[color],
          SIZES[size],
          VARIANTS({variants: variant})
        )}
        onClick={handleListDisplay}>
        <p className={'text-right p-0 m-0 text-m-base sm:text-d-xs md:text-d-base'}>{selectedText}</p>
      </div>
      {show && (
        <ul className="bg-danger absolute w-full m-0 mt-1 rounded p-1 bg-white shadow-lg text-right z-[9999999]">
          {optionsList.map(option => {
            return (
              <li
                className={classNames(
                  "list-none py-1 px-3 my-1 cursor-pointer text-m-base sm:text-d-xs md:text-d-base text-grey-600",
                  HOVER_COLORS[color]
                )}
                data-name={option[id]}
                key={option[id]}
                onClick={(event) => handleOptionClick(event)}
              >
                {option[text]}
              </li>
            );
          })}
        </ul>
      )}
      <div onClick={handleListDisplay} className={'absolute md:top-6 sm:top-5 top-4 left-4'}>
        <svg fill={"currentColor"} className={classNames(
          show ? 'rotate-180 transition-all duration-300' : 'transition-all duration-300',
          variant === 'contained' ? 'text-white' : `text-${color}`
        )} xmlns="http://www.w3.org/2000/svg" width="16.431" height="8.226">
          <path d="M7.5 0a.727.727 0 0 1 .67.423.657.657 0 0 1-.157.746L2.086 6.764a1.973 1.973 0 0 0 0 2.9l5.927 5.595a.658.658 0 0 1 0 .968.756.756 0 0 1-1.026 0L1.06 10.636a3.292 3.292 0 0 1 0-4.84L6.987.2A.748.748 0 0 1 7.5 0z" transform="rotate(-90 4.113 4.113)"/>
        </svg>
      </div>
    </div>
  )
}

export default Select;
