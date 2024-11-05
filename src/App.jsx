//!=======project 1===================>

// import React from 'react'
// import Navbar from './Components/Navbar'
// import Content from './Components/Content'
// import Hero from './Components/Hero'

// const App = () => {
//   return (<>
  
//   <Navbar/>
//   <Content/>
//   <Hero/>
  
//   </>
    
//   )
// }

// export default App




//!=========== project 2============>

// import React from 'react'
// import Nav from './project2/Nav'
// import Contactus from './project2/Contactus'
// import Button from './project2/Button'
// import Form from './project2/Form'
// import Support from './project2/Support'


// const App = () => {
//   return (
//     <div>
//      <Nav/>
//      <Contactus/>
//      <Button/>
//      <Form/>
//      <Support/>
//     </div>
//   )
// }

// export default App




//!====== project 3=================>

import React, { useState } from 'react'
import Home from './project3/Home'
import Playgame from './project3/Playgame';
const App = () => {
  let[playgame,handleplaygame]=useState(false);
  const toggleplay=()=>{
    handleplaygame((prev)=>!prev)
  }
  return (
   <>
   {playgame?<Playgame/>:<Home toggle={toggleplay}/>}
   </>
  )
}

export default App






