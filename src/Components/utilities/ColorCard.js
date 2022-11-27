import React from 'react'

const ColorCard = ({name,content}) => {
  return (
    <>
      <p className={name}>{content}</p>
    </>
  )
}

export default ColorCard