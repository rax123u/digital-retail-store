import { Link, useLocation } from 'react-router-dom'
import { FiShoppingBag, FiSearch } from 'react-icons/fi'

const Navbar = () => {
  const location = useLocation()

  // Helper function to check active routes for styling
  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <nav className="max-w-360 mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24 py-5">
        
        {/* ===== BRAND LOGO ===== */}
        <Link
          to='/'
          className="text-xl font-black uppercase tracking-tighter text-black hover:text-gray-600 transition-colors"
        >
          AURIX-STORE.
        </Link>

        {/* ===== NAVIGATION LINKS ===== */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
          <Link
            to='/'
            className={`relative py-1 transition-colors duration-300 ${
              isActive('/') ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            Home
          </Link>

          <Link
            to='/store'
            className={`relative py-1 transition-colors duration-300 ${
              isActive('/store') ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            Store
          </Link>

          <Link
            to='/cart'
            className={`relative py-1 transition-colors duration-300 ${
              isActive('/cart') ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            Cart
          </Link>

          <Link
            to='/login'
            className={`relative py-1 transition-colors duration-300 ${
              isActive('/login') ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            Login
          </Link>
        </div>

        
        <div className='flex items-center gap-6 md:gap-8 text-black'>
          
          
          <button className='hover:text-gray-500 transition-colors duration-300 focus:outline-none'>
            <FiSearch size={18} />
          </button>

          {/* Minimal Bag Component */}
          <Link
            to='/cart'
            className='relative hover:text-gray-500 transition-colors duration-300 flex items-center'
          >
            <FiShoppingBag size={18} />

            {/* Premium Badge Identifier */}
            <span className='absolute -top-1.5 -right-2 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-extrabold tracking-tighter transform translate-x-1'>
              0
            </span>
          </Link>

        </div>

      </nav>
    </header>
  )
}

export default Navbar