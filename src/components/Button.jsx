import React from 'react'
import { Button } from '.'

const button = ({bgColor,color,size,text,borderRadius}) => {
  return (
    <button
    type='button'
    style={{backgroundColor:bgColor,color,borderRadius}}
    className={'text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}'}>
      {text}
    </button>
  )
}

export default button