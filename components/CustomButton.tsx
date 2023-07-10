import { CustomButtonProps } from '@/types'
import React from 'react'



const CustomButton = ({title, containerStyle, handleClick, btnType } : CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className = {`${containerStyle}`}
      onClick = {handleClick}
    >
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton