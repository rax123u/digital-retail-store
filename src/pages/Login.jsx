import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiLock, FiUser, FiCpu } from 'react-icons/fi'

const Login = () => {
  const [formData, setFormData] = useState({ identifier: '', password: '' })
  const [isFocused, setIsFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // System authentication logic goes here
  }

  return (
    <div className="bg-[#fafafa] text-black font-sans antialiased selection:bg-black selection:text-white min-h-screen pt-17.25 flex items-center justify-center px-6 md:px-16 lg:px-24 py-12">
      
      <div className="max-w-5xl w-full bg-white rounded-2xl border border-neutral-200/70 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-150">
        
        {/* ===== LEFT PANEL: STRUCTURAL BRANDING WALL ===== */}
        <div className="lg:col-span-5 bg-black text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-800">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-neutral-500">
              <FiCpu size={18} className="animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Aurix-Store</span>
            </div>
            
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none pt-4">
              LOGIN CREDENTIALS
            </h2>
          </div>

          <div className="space-y-4 relative z-10 pt-12 lg:pt-0">
            <div className="border-t border-neutral-800 pt-4">
              <div className="flex justify-between text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-1">
                <span>Encryption</span>
                <span>Aurix</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                Synchronize your credentials to retrieve archived custom components and order configurations.
              </p>
            </div>
          </div>
        </div>

        {/* ===== RIGHT PANEL: CONTROL INPUT INTERFACE ===== */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">Verification</p>
            <h1 className="text-3xl font-black uppercase tracking-tight text-neutral-900">LOGIN SYSTEM</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Identifier Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 flex justify-between">
                <span> email</span>
                {formData.identifier && <span className="text-emerald-500">READY</span>}
              </label>
              <div className={`relative flex items-center border rounded-lg transition-all duration-300 bg-neutral-50/50 ${isFocused === 'id' ? 'border-black bg-white ring-2 ring-black/5' : 'border-neutral-200'}`}>
                <FiUser className={`absolute left-4 transition-colors ${isFocused === 'id' ? 'text-black' : 'text-gray-400'}`} size={16} />
                <input
                  type="text"
                  required
                  value={formData.identifier}
                  onFocus={() => setIsFocused('id')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  placeholder="EMAIL OR NOMAD ID"
                  className="w-full bg-transparent py-4 pl-12 pr-4 outline-none font-bold text-xs tracking-widest placeholder:text-gray-300 text-black"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 flex justify-between">
                <span>password</span>
                <a href="#" className="hover:text-black transition-colors lowercase font-medium tracking-normal">Forgot?</a>
              </label>
              <div className={`relative flex items-center border rounded-lg transition-all duration-300 bg-neutral-50/50 ${isFocused === 'pass' ? 'border-black bg-white ring-2 ring-black/5' : 'border-neutral-200'}`}>
                <FiLock className={`absolute left-4 transition-colors ${isFocused === 'pass' ? 'text-black' : 'text-gray-400'}`} size={16} />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onFocus={() => setIsFocused('pass')}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full bg-transparent py-4 pl-12 pr-4 outline-none font-bold text-xs tracking-widest uppercase placeholder:text-gray-300 text-black"
                />
              </div>
            </div>

            {/* Submit Action Block */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-900 transition-all duration-300 group rounded-lg relative overflow-hidden"
              >
                <span>SIGN UP</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </button>
            </div>
          </form>

          {/* Registration Redirect Anchor */}
          <div className="mt-8 pt-6 border-t border-dashed border-neutral-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-xs text-gray-400 font-medium">New Node to the Network?</span>
            <Link to="/login" className="text-xs font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors flex items-center gap-1">
              Create Profile <FiArrowRight size={12} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login