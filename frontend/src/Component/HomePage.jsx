import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>Real-time ecommerce</h1>
      <nav>
        <Link to='shop/'>Items</Link><br/>
      </nav>
      <p>This is a production only for copy purpose it does not function real time but only as a prototype for a real time project,Hence copy of work is strictly rejected</p>
      <footer>&copy;react community 2026</footer>
    </div>
  )
}

export default HomePage
