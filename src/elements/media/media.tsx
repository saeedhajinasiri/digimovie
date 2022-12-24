import React from 'react';
import {MediaProps} from "./media.props";
import styles from './media.module.css';

export const Media = ({children, style, ...restProps}: MediaProps) => {
  let className = 'pb-display-none';

  if (restProps.at) {
    className = `pb-at-${restProps.at}`;
  }
  if (restProps.lessThan) {
    className = `pb-lessThan-${restProps.lessThan}`;
  }
  if (restProps.greaterThan) {
    className = `pb-greaterThan-${restProps.greaterThan}`;
  }
  if (restProps.greaterThanOrEqual) {
    className = `pb-greaterThanOrEqual-${restProps.greaterThanOrEqual}`;
  }
  if (restProps.between) {
    className = `pb-between-${restProps.between}`;
  }

  return (
    <div className={styles[className]} style={style}>{children}</div>
  );
}

export default Media;