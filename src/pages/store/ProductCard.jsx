import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

export const ProductCard = ({ product, isHovered, onMouseEnter, onMouseLeave }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="group flex flex-col h-full bg-white rounded-xl border border-neutral-200/70 overflow-hidden shadow-xs hover:shadow-xl hover:border-black transition-all duration-300 relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link to={`/product/${product.id}`} className="flex flex-col h-full p-5">
      
      <div className="aspect-4/5 bg-neutral-50 rounded-lg overflow-hidden flex items-center justify-center relative border border-neutral-100 transition-colors group-hover:bg-neutral-100/50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-3/4 h-3/4 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-out will-change-transform"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />

        <div className={`absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-black via-black/80 to-transparent flex items-center justify-between text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <span className="text-[9px] font-bold tracking-widest uppercase pl-1">TECHNICAL ARCHITECTURE SPEC</span>
          <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-md">
            <FiArrowUpRight size={14} />
          </div>
        </div>
      </div>

      
      <div className="mt-5 flex flex-col justify-between flex-1 pt-2 border-t border-neutral-100">
        <div className="flex justify-between items-start gap-4">
          <h2 className="text-lg font-black tracking-tight uppercase leading-tight text-neutral-900 group-hover:text-black transition-colors">
            {product.title}
          </h2>
          <p className="text-lg font-black tracking-tighter text-neutral-900">${product.price}</p>
        </div>

        <div className="mt-4 pt-3 border-t border-dashed border-neutral-200 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-neutral-400">
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isHovered ? 'bg-black' : 'bg-neutral-300'}`} />
            {product.category}
          </span>
          <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-extrabold">
            View Spec →
          </span>
        </div>
      </div>
    </Link>

    
    <div className={`h-0.75 w-full bg-black absolute bottom-0 left-0 transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
  </motion.div>
)