import React from 'react'
import { MdMessage } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import style from "./Nav.css"

const Button = () => {
   
        
    
  return (<>
    <div className='btn'>
      <button><MdMessage/>VIA SUPPORT CHAT</button>
      <button><IoCall/>VIA CALL</button>
    </div>
    <div className='btndiv'>
        <button className='btn2'><IoMdMail/>VIA EMAIL FORM </button>
    </div>
    </>
  )
}

export default Button
