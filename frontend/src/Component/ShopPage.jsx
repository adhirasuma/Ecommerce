import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react';


function ShopPage() {
    let stack=[
        {id:1,name:'quil pen',price:100,Cartcount:0,Wishcount:0},
        {id:2,name:'wooden doll',price:100,Cartcount:0,Wishcount:0}];
    let [items,setitems]=useState(stack);
    const navigate =useNavigate();

    const handleClick=()=>{
        navigate('cart/',{state:{items}});
    }
    const handleClick1=()=>{
        navigate('wish/',{state:{items}});
    }
    const handleCart=(index)=>{
        setitems(items.map((item)=>item.id===index?{...item,Cartcount:item.Cartcount+1}:item))
    }
    const handleWishList=(index)=>{
        setitems(items.map((item)=>item.id===index?{...item,Wishcount:item.Wishcount+1}:item))
    }

    const list=items.map(item=>{
    return(
      <ul>
        <li key={item.id}>{item.name}{item.Cartcount}{item.Wishcount}
            <button onClick={(e)=>{e.preventDefault(); handleCart(item.id)}}>Add to cart</button>
            <button onClick={(e)=>{e.preventDefault(); handleWishList(item.id)}}>Add to Wishlist</button>
        </li>
        </ul>
    );})
  return (

    <div>
      <h1>Items</h1>
      <button onClick={handleClick}>check cart</button>
      <button onClick={handleClick1}>check Wishlist</button>
      {list}
    </div>
  )
}

export default ShopPage
