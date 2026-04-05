import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function CartPage() {
    let location =useLocation();
    let product=location.state.items||[];
    let [items,setitems]=useState(product);
    const navigate=useNavigate();
    let handleBuy=()=>{
      navigate('/shop/cart/purchase',{state:sum})
    }
    let handleClick=(id)=>{
      setitems(items.map(item=>item.id===id?{...item,Cartcount: Math.max(item.Cartcount - 1, 0)}:item))
    }
    let purchase=items.filter(item=>item.Cartcount>0);
    
    let sum=purchase.reduce((accu, item) => accu + item.price*item.Cartcount, 0);
    let cart=purchase?.length ===0 ? <p>No items added</p>:purchase.map(item=>{
      return(
      <ul>
        <li key={item.id}>
          {item.name +"-"}
          {item.Cartcount+"-"}
          {item.price}
          <button onClick={(e)=>{e.preventDefault();handleClick(item.id);}}>Remove item</button>
        </li>
      </ul>
      )
    });
  return (
    <div>
      <h1>Hello user</h1>
      {cart}
      <p>Total:{sum}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  )
}

export default CartPage
