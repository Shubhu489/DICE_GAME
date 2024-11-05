import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Selectnum from './Selectnum'
import Rolldice from './Rolldice'
import Rules from './Rules'

const Playgame = () => {
  let[score,setscore]=useState(0);
  let[selected,setselected]=useState();
  let[rolldice,setrolldice]=useState(1);
  let[error,seterror]=useState();
  let[rules,setrules]=useState(false);

  const getRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    
    return Math.floor(Math.random() * (max - min) + min)
  }

  const rollthedice=()=>{
    if(!selected){
seterror("You have not selected any number")
return;
    }
    seterror("")
    const randomnumber=getRandomNumber(1,7)
    setrolldice((prev)=>randomnumber)
    if(selected===randomnumber){
      setscore((prev)=> prev+randomnumber)
    }
    else{
      setscore((prev)=> prev-2)
    }
    setselected(undefined);
  }
  const hanldereset=()=>{
    setscore(0);
  }
  return (<>
<Maincontainer>
  <div className='main'>
    <Scorecontainer>
      <h1>{score}</h1>
      <p>TOTAL SCORE</p>
    </Scorecontainer>
    <p className='error'>{error}</p>
    <Selectnum selected={selected} setselected={setselected} error={error} seterror={seterror} />
    </div>
    <Rolldice rolldice={rolldice} rollthedice={rollthedice} />
    <div className='btn'>
      <button onClick={hanldereset} id='btn1'>Reset</button>
      <button onClick={()=>setrules((prev)=>!prev)}  id='btn2'>{rules? "Hide":"Show"} rules</button>
    </div>
    {rules && <Rules/>}
</Maincontainer>
    
    </>
  )
}

export default Playgame

const Scorecontainer=styled.div`
  max-width: 200px;
  text-align: center;
  h1{
    font-size:70px;
    line-height:40px;
    margin-top:15px;

  }
  p{
    font-size:24px;
    font-weight:500px;
    margin-top:-25px
    
  }
  

`

const Maincontainer=styled.main`
padding-top:30px;
  
.main{
  display: flex;
  justify-content:space-around;
  align-items:center;
}
.error{
    color: red;
  }
  .btn{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap: 15px;
  }
  #btn1{
    min-width: 220px;
    padding:10px 18px;
    &:hover{
      background-color:black;
      color: white;
    }
  }
  #btn2{
    min-width:220px;
    padding:10px 18px;
    background-color: black;
    color: white;
    &:hover{
      background-color:#303030e8
    }
  }
`
