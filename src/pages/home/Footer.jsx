import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-24 border-t-2 border-slate-200 bg-white relative block w-full z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto mb-16">
        
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-950">
            AURIX<span className="text-emerald-500">.</span>STORE
          </h2>
          <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-light">
            Premium Tech & Minimalist Devices for the Modern Lifestyle. Experience the future today.
          </p>
          <div className="flex gap-4 pt-4">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Shop</p>
          <Link to="/store" className="text-sm text-slate-700 hover:text-slate-950 font-light transition-colors">Store</Link>
          <Link to="/store" className="text-sm text-slate-700 hover:text-slate-950 font-light transition-colors">New Arrivals</Link>
          <Link to="/cart" className="text-sm text-slate-700 hover:text-slate-950 font-light transition-colors">Cart</Link>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Support</p>
          <Link to="/" className="text-sm text-slate-700 hover:text-slate-950 font-light transition-colors">Privacy Policy</Link>
          <Link to="/" className="text-sm text-slate-700 hover:text-slate-950 font-light transition-colors">Terms of Service</Link>
          <Link to="/login" className="text-sm text-slate-700 hover:text-slate-950 font-light transition-colors">Contact</Link>
        </div>

      </div>

      <div className="pt-12 border-t-2 border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-light">© 2026 AURIX-STORE. All rights reserved.</p>
        <p className="tracking-widest uppercase text-xs text-slate-500 font-light">Built for perfectionists</p>
      </div>
    </footer>
  )
}