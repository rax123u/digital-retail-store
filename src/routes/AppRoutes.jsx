import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../pages/Home'
import Store from '../pages/Store'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

import AnimatedPage from '../components/AnimatedPage'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path='/' element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        } />

        <Route path='/store' element={
          <AnimatedPage>
            <Store />
          </AnimatedPage>
        } />

        <Route path='/product/:id' element={
          <AnimatedPage>
            <ProductDetails />
          </AnimatedPage>
        } />

        <Route path='/cart' element={
          <AnimatedPage>
            <Cart />
          </AnimatedPage>
        } />

        <Route path='/login' element={
          <AnimatedPage>
            <Login />
          </AnimatedPage>
        } />

        <Route path='*' element={
          <AnimatedPage>
            <NotFound />
          </AnimatedPage>
        } />

      </Routes>

    </AnimatePresence>
  )
}

export default AppRoutes