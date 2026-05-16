import { FiCpu, FiGlobe, FiArrowRight, FiActivity } from 'react-icons/fi'

export const BuildingSystemCard = () => (
  <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-black text-white p-8 rounded-xl flex flex-col justify-between border border-black min-h-100 sm:min-h-auto">
    <div className="space-y-4">
      <div className="flex gap-2 text-neutral-500">
        <FiCpu size={16} /> <FiGlobe size={16} />
      </div>
      <h3 className="text-3xl font-black uppercase tracking-tight leading-none">
        BUILDING <br />THE SYSTEM
      </h3>
      <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-medium">
        Our hardware solutions offer structural integration tailored directly to your digital performance architecture.
      </p>
    </div>
    <div className="border-t border-neutral-800 pt-4 flex justify-between items-center text-xs tracking-widest font-bold">
      <span>EST. 2026 // PACKAGES</span>
      <FiArrowRight size={16} className="text-neutral-400" />
    </div>
  </div>
)

export const DiagnosticModuleCard = () => (
  <div className="bg-black rounded-xl p-8 flex flex-col justify-between border border-neutral-200/60 min-h-87.5">
    <div className="flex items-center justify-between">
      <span className="text-3xl font-black uppercase leading-none tracking-tight text-white">
        Diagnostic <br />Module
      </span>
      <FiActivity className="text-white/20 animate-pulse" size={16} />
    </div>
    <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-medium">
      Discover cutting-edge tech at unbeatable prices — your one-stop shop for innovation, performance, and style.
    </p>
    <div className="space-y-2 text-white">
      <div className="text-4xl font-light tracking-tighter">98.4%</div>
      <div className="text-[11px] font-bold uppercase tracking-wide">Material Integrity Calibration Rate</div>
    </div>
    <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
      <div className="bg-white h-full w-[98.4%]" />
    </div>
  </div>
)