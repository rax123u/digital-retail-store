export const StoreHeader = () => (
  <header className="px-6 md:px-16 lg:px-24 pt-16 pb-12 bg-white grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
    <div className="lg:col-span-2">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-4">Ecosystem Catalog</p>
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase m-0">
        THE ARCHIVE
      </h1>
    </div>
    <div className="border-t-2 border-black pt-4 hidden lg:block">
      <div className="flex justify-between text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
        <span>Systems Status</span>
        <span className="text-emerald-500 animate-pulse">● Online</span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed font-medium">
        Latest Tech Collection Discover flagship smartphones, powerful laptops, and premium accessories at unbeatable prices.
      </p>
    </div>
  </header>
)