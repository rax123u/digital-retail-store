import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiShoppingBag, FiActivity, FiShield } from 'react-icons/fi'
import { useToast } from '../context/ToastContext'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()
  const { showToast } = useToast()
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const data = await getProductById(id)
      setProduct(data)
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    showToast("Added to cart")
    setIsAdding(true)
    addToCart(product)
    setTimeout(() => setIsAdding(false), 800) // Micro feedback timer
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] text-black font-sans font-black text-xl tracking-widest uppercase animate-pulse">
        DECRYPTING SPECIFICATION INDEX...
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] text-black font-sans px-6 gap-4">
        <p className="font-bold text-sm tracking-widest text-gray-400 uppercase">Error // Object Not Found</p>
        <Link to="/store" className="text-xs font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-md">
          Return To Index
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-[#fafafa] text-black font-sans antialiased selection:bg-black selection:text-white min-h-screen pt-27.5 pb-24 px-6 md:px-16 lg:px-24">
      
      {/* ===== BACK NAVIGATION LINK ===== */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link 
          to="/store" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Catalogue Index
        </Link>
      </div>

      {/* ===== MAIN ARCHITECTURAL PRODUCT MATRIX ===== */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: HERO CANVAS COMPONENT */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 bg-white border border-neutral-200/70 rounded-2xl p-8 md:p-12 flex items-center justify-center shadow-xs aspect-4/3 lg:sticky lg:top-30"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full max-h-105 object-contain mix-blend-multiply filter transition-transform duration-700 hover:scale-105"
            loading="eager"
          />
        </motion.div>

        {/* RIGHT COLUMN: REVEALED TECHNICAL INFORMATION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-5 space-y-8"
        >
          
          {/* Header Specs Group */}
          <div className="border-b border-neutral-200 pb-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              {product.brand || "OUTFIT HARDWARE"} // COMPONENT System
            </p>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-none">
              {product.title}
            </h1>
            <div className="pt-4 flex items-baseline justify-between">
              <span className="text-2xl md:text-4xl font-black tracking-tighter text-black">
                ${product.price}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-sm">
                In Circulation
              </span>
            </div>
          </div>

          {/* Description Text Fragment */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Structural Overview</h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          {/* SYSTEM HARDWARE METRICS TABLE */}
          <div className="bg-white border border-neutral-200/70 rounded-xl overflow-hidden shadow-xs divide-y divide-neutral-100">
            <div className="grid grid-cols-2 p-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-gray-400">[01] SYSTEM CATEGORY</span>
              <span className="text-right text-black">{product.category}</span>
            </div>
            <div className="grid grid-cols-2 p-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-gray-400">[02] PERFORMANCE RATING</span>
              <span className="text-right text-black flex items-center justify-end gap-1">
                ⭐ <span className="font-extrabold">{product.rating}</span> / 5.0
              </span>
            </div>
            <div className="grid grid-cols-2 p-4 text-xs font-bold uppercase tracking-wider">
              <span className="text-gray-400">[03] AVAILABILITY STACK</span>
              <span className={`text-right font-extrabold ${product.stock < 10 ? 'text-amber-500' : 'text-black'}`}>
                {product.stock} Units Left
              </span>
            </div>
          </div>

          {/* SYSTEM PACKAGING NOTE */}
          <div className="p-4 bg-neutral-100 rounded-xl border border-neutral-200/40 flex gap-3 items-start">
            <FiShield className="text-neutral-400 mt-0.5" size={16} />
            <div className="text-[11px] text-gray-500 leading-normal font-medium">
              Authentic hardware dispatch. Package contains structural tracking verification certificates and global network architecture coverage guidelines.
            </div>
          </div>

          {/* ADD TO LOGISTICS ARRAY INTERACTIVE ACTION */}
          <div className="pt-2">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-900 transition-all duration-300 group rounded-lg relative overflow-hidden"
            >
              <FiShoppingBag size={14} className={isAdding ? "animate-bounce" : ""} />
              <span>{isAdding ? "Integrating Array..." : "Allocate To Storage Bag"}</span>
            </button>
          </div>

        </motion.div>
      </main>
    </div>
  )
}

export default ProductDetails