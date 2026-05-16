import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { collectionItems } from '../../data/homeData'

export const Collections = () => (
  <section className="py-40 px-6 md:px-16 lg:px-24 bg-white">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }}>
      <div className="mb-20 border-b-2 border-slate-200 pb-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-950 mb-3">Shop by Category</h2>
        <p className="text-slate-600 font-light text-lg max-w-lg">Explore our curated collections of premium tech and accessories.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collectionItems.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.12 }} viewport={{ once: true }} whileHover={{ y: -8 }} className="group relative aspect-4/5 bg-slate-50 overflow-hidden rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out will-change-transform" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div />
              <div className="space-y-4">
                <div>
                  <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-300 font-medium">{item.count}</p>
                </div>
                <Link to="/store" className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/40 backdrop-blur-sm hover:border-white hover:bg-white hover:text-slate-950 text-white transition-all duration-300 group-hover:scale-110">
                  <FiArrowUpRight size={20} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
)
