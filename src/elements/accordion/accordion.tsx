import React, {useEffect, useRef, useState} from 'react';
import {AccordionElementTagNameMap, AccordionProps} from "./accordion.props";
import classNames from "../../utils/helpers/class-names";

const CustomAccordion = ({children, expanded, defaultExpanded = false, className, ...rest}: AccordionProps) => {
  const [open, setOpen] = useState(defaultExpanded || !!expanded);
  const ref = useRef<AccordionElementTagNameMap>(null);

  useEffect(() => {
    setOpen(defaultExpanded || !!expanded);
  }, [expanded]);

  useEffect(() => {
    if (ref.current && ref.current.lastChild) {
      ref.current.lastChild.className = open ? 'overflow-visible h-auto' : 'h-0 overflow-hidden'
    }
  }, [open]);

  useEffect(() => {
    if (ref.current && ref.current.firstChild && !expanded) {
      ref.current.firstChild.addEventListener('click', () => {
        setOpen((prevState) => !prevState);
      })
    }
  }, []);

  return (
    <div className={classNames(
      `flex flex-col`,
      className,
    )} ref={ref} {...rest}>
      {children}
    </div>
  )
}

export default CustomAccordion
