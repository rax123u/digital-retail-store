import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { features } from '../../data/homeData'

export const Hero = () => (
  <section className="min-h-[95vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative z-10 bg-linear-to-br from-white via-slate-50 to-slate-100 overflow-hidden">
    <div className="absolute top-10 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-slate-300/10 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-5xl w-full relative z-10">
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 mb-8">
        Tech Store © 2026
      </motion.p>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8 text-slate-950">
          The Future<br />
          <span className="bg-linear-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent">Revealed</span>
          <span className="text-slate-400">.</span>
        </h1>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed font-light tracking-wide mb-4">
        Where premium technology meets minimalist design excellence. Curated products for the modern perfectionist.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="flex flex-wrap gap-6 md:gap-10 mb-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
            <span className="text-lg">{feature.icon}</span>
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="flex flex-col sm:flex-row gap-4">
        <Link to="/store" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-all duration-300 group rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
          Explore Collection <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
        </Link>
        <Link to="/login" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-950 text-slate-950 font-bold uppercase text-xs tracking-widest hover:bg-slate-950 hover:text-white transition-all duration-300 rounded-lg">
          Login
        </Link>
      </motion.div>
    </div>
  </section>
)