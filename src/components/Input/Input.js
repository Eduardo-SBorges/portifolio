import React from 'react'
import { INPUT, LABEL } from './Input.styled'

const Input = ({ type, text, onFocus, top, marginLeft,onBlur,fontSize,topMedia }) => {
  return (
    <>
      <LABEL top={top} marginLeft={marginLeft} fontSize={fontSize} topMedia={topMedia}>
        {text}
      </LABEL>
      <INPUT type={type} onFocus={onFocus} onBlur={onBlur}  />
    </>
  )
}

export default Input
