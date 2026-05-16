import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from './context/ToastContext'

import './index.css'
import App from './App'

import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ToastProvider>
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>
</ToastProvider>
  </BrowserRouter>
 
)