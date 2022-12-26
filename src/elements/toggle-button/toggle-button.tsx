import React, {ReactNode} from 'react'


export const ToggleButton = ({children, value}: { children: ReactNode, value: string }) => {

  return (
    <div>
      <div className={'h-12 px-4 flex justify-center items-center cursor-pointer border-r border-t border-b border-b-grey-300 border-t-grey-300 border-r-grey-300 border-opacity-50'}>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default ToggleButton
