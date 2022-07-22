import { height } from '@mui/system'
import React from 'react'
import Cardsec from './Cardsec'

const Carduser = (props) => {
  return (
    <>
   <div style={{background:'yellow',color:'black'}}>
    price:{props.price}</div>
    {console.log(props.id)}
    {console.log(global.card +"y")}
 </>
  )
}

export default Carduser