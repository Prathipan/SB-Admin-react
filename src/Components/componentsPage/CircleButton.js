import React from 'react'

const CircleButton = ({name,icon}) => {
    console.log(name)
  return (
    <>
       <a href="" className={name}>
                <i className={icon}></i>
              </a>
    </>
  )
}

export default CircleButton