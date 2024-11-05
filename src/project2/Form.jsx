import React, { useState } from 'react'
import style from "./Nav.css"

const Form = () => {
    let[name,setname]=useState("shubhu");
    let[mail,setmail]=useState("s@gmail.com");
    let[msg,setmsg]=useState("hii i m facing an issue");
    const onsubmit=(e)=>{
        e.preventDefault();
       setname(e.target[0].value);
       setmail(e.target[1].value);
       setmsg(e.target[2].value);
        
        

    }
  return (
   <section>
   
    <form action="" onSubmit={onsubmit} className='form-controller'>
        <div className='name-box'>
        <label htmlFor="Name">Name </label>
            <input type="text" name='Name'/> 
            </div>

 
       <div className='mail-box'>
        <label htmlFor="Email"> Email </label>
            <input type="text" name='Email' />
            </div>



       <div className='msg-box'>
        <label htmlFor="msg">Msg</label>
            <input type="text" name='msg'/>
            </div> 
        
        <button id='form-button'>Submit</button>
        <div>
            {name +" "+ mail +" "+msg}
        </div>
    </form> 
   </section>
  )
}

export default Form
