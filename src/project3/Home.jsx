import React from 'react';
import styled from 'styled-components';

const Home = ({toggle}) => {
  return (
  <>
  
  <Container>
    <img src="/project3_images/dices1.png" alt="dice" />
    <div className='content'>
    <h1>DICE GAME</h1>
    <Button onClick={toggle}>PLAY NOW</Button>
    </div>
  </Container>
  </>
  )
}

export default Home;

const Container= styled.div`
    display: flex;
    max-width:1180px;
    margin: 0 auto;
    align-items:center;
    .content {
        h1{
            font-size:80px;
            white-space:nowrap;
        }
    }

`
const Button=styled.button`
    min-width: 220px;
    background-color: black;
    color: white;
    padding: 10px 18px;
&:hover{
    background-color:#383838;
}
`
