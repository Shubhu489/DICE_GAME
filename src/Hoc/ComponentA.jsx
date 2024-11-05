import React from 'react'
import Hoc from "./Hoc"

const ComponentA = (props) => {
    let {name,age}=props
  return (
    <>
      <h1>{name}{age}</h1>
    </>
  )
}

export default Hoc (ComponentA);
