import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopPage from './Component/ShopPage'
import CartPage from './Component/CartPage'
import Purchase from './Component/Purchase'
import WishListPage from './Component/WishListPage'
import HomePage from './Component/HomePage'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='shop/' element={<ShopPage/>}/>
        <Route path='shop/cart/' element={<CartPage/>}/>
        <Route path='shop/cart/purchase/' element={<Purchase/>}/>
        <Route path='shop/wish/' element={<WishListPage/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
