import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({rolldice,rollthedice}) => {
    
    
  return (<>
  <Rolldicecontainer>

<div className='dice' onClick={rollthedice}>
    <img src={`/project3_images/dice_images/dice_${rolldice}.png`} alt="dices" />
</div>
<p>Click On The Dice.</p>

    </Rolldicecontainer>
  
  </>
    
  )
}

export default Rolldice
const Rolldicecontainer=styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-top:40px
p{
    font-size:20px;
    font-weight:400px
}

`