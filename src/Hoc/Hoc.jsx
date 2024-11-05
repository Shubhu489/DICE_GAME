import React from 'react'

const Hoc = (ComponentName) => {
return props =>{
    console.log(props);   


  return (
    <>
     <ComponentName
     name="naveen"
     age={24}
     /> 
    </>
  )
}
}

export default Hoc
