import React, { useState } from 'react'
import styled from 'styled-components'

const Selectnum = ({error ,seterror, selected,setselected}) => {
    let arr=[1,2,3,4,5,6]
   
   
    console.log(selected);
    const numberselectorhandler=(val)=>{
setselected(val);
seterror("")
    }
    
  return (
    <Numselect>
        <div className='flex'>
      {arr.map((val,ind)=>{
        return(
        <Box isSelected={val===selected}
        key={ind} onClick={()=>numberselectorhandler(val)}>{val}
        
        </Box>
        
    )
      })}
      </div>
      <p>SELECT NUMBER</p>
    </Numselect>
  )
}

export default Selectnum

const Box=styled.div`
    height: 60px;
    width: 60px;
    border: 2px solid black;
    display: grid;
    place-items:center;
    background-color: ${(props)=>(props.isSelected ?"black":"white")};
    color: ${(props)=>(!props.isSelected ?"black":"white")};
`
const Numselect=styled.div`
display: flex;
flex-direction:column;
align-items: end;
   
.flex{
    display: flex;
    gap: 20px;
}

`