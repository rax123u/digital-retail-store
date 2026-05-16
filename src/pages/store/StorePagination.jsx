import { FiArrowRight } from 'react-icons/fi'

export const StorePagination = ({ page, prevPage, nextPage }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 mt-24 lg:mt-32 pt-8 gap-6">
    <button
      onClick={prevPage}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-6 py-4 border border-gray-200 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all group bg-white"
    >
      <FiArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={14} />
      <span>Previous</span>
    </button>

    <div className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
      Index Details — Page {page + 1}
    </div>

    <button
      onClick={nextPage}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-6 py-4 border border-gray-200 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all group bg-white"
    >
      <span>Next Index</span>
      <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
    </button>
  </div>
)