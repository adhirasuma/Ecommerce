import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import Gpay from '../Gpay.jpg'

function Purchase() {
 const location= useLocation()
 let sum =location.state||0;
 let [toggle,settoggle]=useState(false);
  return (
    <div>
      <h1>Purchase</h1>
      <p>Total:{sum ? sum:0}</p>
      <nav>
        <label htmlFor='cashOnDelivery'>Cash on delivery:</label>
        <input type='radio' id='cashOnDelivery' name='purchase' onClick={()=>{settoggle(false)}}></input>
        <label htmlFor='gpay'>Gpay:</label>
        <input type='radio' id='gpay' name='purchase' onClick={()=>{settoggle(true)}}></input>
      </nav>
      {toggle && 
      <div>
      <img src={Gpay} alt='Gpay QR code' height={200} width={200}></img>
      </div>
      }
      <button onClick={()=>{alert('Order placed successfully!')}}>Buy</button>
    </div>
  )
}

export default Purchase
