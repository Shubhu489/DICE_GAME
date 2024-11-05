import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
   <Rulescontainer>
<h2>HOW TO PLAY A DICE GAME</h2>
<div className="text">
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>After click on dice if selected number is equal to dice you will get same point as dice</p>
    <p>If you got wrong guess you will get 2 point deducted</p>
</div>
   </Rulescontainer>
  )
}

export default Rules
const Rulescontainer=styled.div`
    display: flex;
    flex-direction:column;
    background-color:#FBF1F1;
    color: black;
    padding: 20px;
    max-width:600px;
    margin: 0 auto;
    margin-top:30px;
h2{
    font-size: 20px;

}
.text{
    margin-top:24px;
}

`
