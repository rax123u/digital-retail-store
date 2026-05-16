import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { stats } from '../../data/homeData'

export const TrustAndCTA = () => (
  <>
    <section className="py-32 px-6 md:px-16 lg:px-24 bg-linear-to-r from-slate-900 to-slate-800 text-white">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</p>
            <p className="text-slate-400 font-light text-sm uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>

    <section className="py-48 px-6 md:px-16 text-center flex flex-col items-center justify-center bg-linear-to-b from-white to-slate-50 overflow-hidden relative">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-4xl">
        <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase leading-none tracking-tighter text-slate-950 mb-8">Start Shopping</h2>
        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto mb-12">Discover premium technology that transforms the way you work and live.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-950 text-white font-bold uppercase text-sm tracking-widest rounded-xl shadow-2xl hover:shadow-3xl hover:bg-slate-800 transition-all duration-300">
          Browse Collection <FiArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  </>
)