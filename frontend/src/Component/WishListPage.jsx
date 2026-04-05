import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'

function WishListPage() {
    let location =useLocation();
    let product=location.state.items||[];
    let [items,setitems]=useState(product);
    let handleClick=(id)=>{
      setitems(items.map((item)=>item.id===id?{...item,Wishcount: Math.max(item.Wishcount - 1, 0)}:item))
    }
    let purchase=items.filter(item=>item.Wishcount>0);
    let wish=purchase?.length ===0 ? <p>No items added</p>:purchase.map(item=>{
      return(
      <ul>
        <li key={item.id}>
          {item.name}
          <button onClick={(e)=>{e.preventDefault();handleClick(item.id);}}>Remove item</button>
        </li>
      </ul>
      )
    });

  return (
    <div>
      <h1>WishList</h1>
      {wish}
    </div>
  )
}

export default WishListPage
