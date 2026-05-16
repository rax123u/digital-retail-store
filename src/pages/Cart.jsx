import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTrash2, FiPlus, FiMinus, FiArrowRight, FiLayers } from 'react-icons/fi'

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice
  } = useCart()

  return (
    <div className="bg-[#fafafa] text-black font-sans antialiased selection:bg-black selection:text-white min-h-screen pt-27.5 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== SECTION HEADER ===== */}
        <header className="mb-12 border-b border-neutral-200 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">Storage Logistics</p>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            YOUR CART
          </h1>
        </header>

        {cart.length === 0 ? (
          /* Empty Manifest State */
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-neutral-200/70 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-87.5 shadow-xs"
          >
            <FiLayers size={32} className="text-neutral-300 mb-4" />
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6"> No Units Stored</p>
            <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-neutral-900 transition-colors">
              Browse Products <FiArrowRight size={14} />
            </Link>
          </motion.div>
        ) : (
          /* Main Functional Split Grid Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT FRAME: STORAGE ALLOCATION MANIFEST ITEMS */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-neutral-200/70 p-5 rounded-xl shadow-xs relative overflow-hidden group hover:border-neutral-400 transition-colors"
                >
                  
                  {/* Thumbnail & Title Identification Group */}
                  <div className="flex items-center gap-5 w-full sm:w-auto">
                    <div className="w-20 h-20 bg-neutral-50 rounded-lg p-2 flex items-center justify-center border border-neutral-100 shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="space-y-1">
                      <h2 className="font-black text-base uppercase tracking-tight text-neutral-900">
                        {item.title}
                      </h2>
                      <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                        Unit price // ${item.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Step Controllers & Removal Cluster */}
                  <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-neutral-100">
                    
                    {/* Industrial Counter Grid */}
                    <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50 p-1">
                      <button 
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-neutral-600 hover:text-black transition-colors focus:outline-none"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="w-10 text-center font-black text-xs text-neutral-900">{item.qty}</span>
                      <button 
                        onClick={() => increaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-neutral-600 hover:text-black transition-colors focus:outline-none"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>

                    {/* Technical Removal Node */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center justify-center w-9 h-9 border border-neutral-200 text-neutral-400 hover:text-red-500 hover:border-red-200 rounded-lg transition-colors bg-white hover:bg-red-50 focus:outline-none"
                      title="Deallocate Item"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT FRAME: FINANCIAL CALCULATIONS & CHECKOUT LEDGER */}
            <div className="lg:col-span-4 bg-white border border-neutral-200/70 p-6 rounded-xl shadow-xs space-y-6 lg:sticky lg:top-30">
              <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase border-b border-neutral-100 pb-3">
                FINANCIAL COMPILATION
              </h3>
              
              {/* Ledger Matrix Breakdown Table */}
              <div className="space-y-3 font-bold text-xs uppercase tracking-wider">
                <div className="flex justify-between text-gray-400">
                  <span>TOTAL UNITS</span>
                  <span className="text-black font-extrabold">{cart.reduce((acc, item) => acc + item.qty, 0)} Units</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>DISPATCH LOGISTICS</span>
                  <span className="text-black font-extrabold text-[10px] bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-sm">GRATIS</span>
                </div>
                
                <div className="pt-4 border-t border-dashed border-neutral-200 flex justify-between items-baseline">
                  <span className="text-sm font-black text-neutral-900">NET CHARGE STACK</span>
                  <span className="text-2xl font-black tracking-tighter text-black">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Core Execution Gate Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => alert('Proceeding to dispatch array initialization.')}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-900 transition-all duration-300 group rounded-lg relative overflow-hidden"
                >
                  <span> Order</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart