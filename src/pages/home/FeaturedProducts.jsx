import { motion, useTransform } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { productItemsRaw } from '../../data/homeData'

export const FeaturedProducts = ({ smoothProgress, opacities }) => {
  const combinedProducts = productItemsRaw.map((item, index) => ({
    ...item,
    opacity: opacities[index]
  }))

  const barScaleX = useTransform(smoothProgress, [0.15, 0.75], [0, 1])
  const textOpacity = useTransform(smoothProgress, [0.15, 0.75], [0.5, 1])

  return (
    <section className="h-[400vh] relative bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-2">Featured Collection</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Premium Selection</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center h-[70vh]">
          <div className="relative h-64 md:h-full flex items-center justify-center bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent pointer-events-none" />
            {combinedProducts.map((product) => (
              <motion.img key={product.id} style={{ opacity: product.opacity }} src={product.img} alt={product.title} className="absolute w-3/4 h-3/4 object-contain mix-blend-lighten pointer-events-none filter drop-shadow-2xl" loading="lazy" />
            ))}
          </div>

          <div className="relative h-48 md:h-full flex items-center">
            {combinedProducts.map((product) => (
              <motion.div key={product.id} style={{ opacity: product.opacity }} className="absolute inset-x-0 border-l-4 border-emerald-400 pl-8 py-2">
                <div className="inline-block px-3 py-1 bg-emerald-400/20 border border-emerald-400/50 rounded-full mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">{product.category}</p>
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">
                  <span className="text-slate-400 font-light">{product.num}</span>
                  <span className="text-slate-500 font-light mx-3">/</span>{product.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base max-w-md tracking-wide leading-relaxed font-light">{product.desc}</p>
                <motion.button whileHover={{ x: 8 }} className="mt-6 flex items-center gap-2 text-emerald-400 font-semibold uppercase text-xs tracking-widest hover:text-emerald-300 transition-colors">
                  View Product <FiArrowRight size={14} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-6 right-6 md:left-16 md:right-16 lg:left-24 lg:right-24">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Scroll Progress</span>
            <motion.span style={{ opacity: textOpacity }} className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Featured Items</motion.span>
          </div>
          <div className="h-0.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div className="h-full bg-linear-to-r from-emerald-400 to-cyan-400 origin-left shadow-lg" style={{ scaleX: barScaleX }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts