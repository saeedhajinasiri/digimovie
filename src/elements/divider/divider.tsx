import React from 'react'
import styles from './divider.module.css'
import {DividerProps} from './divider.props'

export const Divider = (props: DividerProps) => {

  const className = `${props.color}Divider`

  return (
    <div className={`${styles[className]} ${styles.defaultClass}`}/>
  )
}

Divider.defaultProps = {
  color: 'secondary'
}


export default Divider
