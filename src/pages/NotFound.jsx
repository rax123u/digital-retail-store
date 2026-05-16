import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiAlertTriangle, FiArrowLeft, FiTerminal } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans antialiased selection:bg-black selection:text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Matrix Grid Overlay Layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />
      
      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        
        {/* Diagnostic Icon Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black text-white shadow-xs border border-neutral-800"
        >
          <FiAlertTriangle size={28} className="text-amber-400 animate-pulse" />
        </motion.div>

        {/* Big Code Error Metadata Block */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs font-bold tracking-[0.35em] text-neutral-400 uppercase flex items-center justify-center gap-2"
          >
            <FiTerminal size={12} /> STATUS_CODE : 404
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-neutral-900"
          >
            INDEX OUT OF BOUNDS
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-500 font-medium text-xs sm:text-sm max-w-sm mx-auto leading-relaxed"
          >
            The execution node you are trying to resolve does not exist or has been permanently pruned from our active network data matrices.
          </motion.p>
        </div>

        {/* Structural Interface Metrics Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border border-neutral-200 rounded-xl p-5 text-left font-mono text-[10px] text-neutral-400 uppercase tracking-widest space-y-2.5 shadow-xs"
        >
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span>Requested Path:</span>
            <span className="text-black font-bold break-all lowercase">{window.location.pathname}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span>System Domain:</span>
            <span className="text-black font-bold">AURIX_CORE_V3</span>
          </div>
          <div className="flex justify-between text-neutral-400">
            <span>Integrity Flag:</span>
            <span className="text-emerald-500 font-bold">SYS_SAFE</span>
          </div>
        </motion.div>

        {/* Action Call Deck */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-2"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-neutral-200 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 group shadow-xs hover:shadow-md"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={14} />
            <span>Return to Safe Hub</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound