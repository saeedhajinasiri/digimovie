import React from 'react';
import {RatingProps} from './rating.props'
import classNames from "../../utils/helpers/class-names";
import Text from "../text";

export const Rating = ({readOnly, value, size = 'lg', ...rest}: RatingProps) => {
  return (
    <Text
      color={"warning"}
      typography={size}
      className={classNames(
        'inline-flex relative cursor-pointer text-left pointer-events-none',
      )}
      aria-label={`${value} Stars`}
      {...rest}>
      <Star fill={value >= 1}/>
      <Star fill={value >= 2}/>
      <Star fill={value >= 3}/>
      <Star fill={value >= 4}/>
      <Star fill={value >= 5}/>
    </Text>
  )
}

const Star = ({fill}: { fill: boolean }) => {
  return (
    <span className="hover:scale-125 flex pointer-events-none items-center">
      <svg fill={"currentColor"} className="inline-block fill-current shrink-0 user-select-none w-[1em] h-[1em] transition delay-75" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon">
        {fill ? (
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        ) : (
          <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
        )}
      </svg>
    </span>
  )
}

export default Rating;
