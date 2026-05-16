import { FiSearch, FiChevronDown } from 'react-icons/fi'

export const StoreControls = ({ search, setSearch, category, setCategory, sort, setSort }) => (
  <section className="grid grid-cols-1 md:grid-cols-12 border-y border-gray-200 bg-white sticky top-18.25 z-40 shadow-xs">
    {/* Search Input Container */}
    <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-gray-200 relative">
      <FiSearch className="absolute top-1/2 left-6 -translate-y-1/2 text-gray-400 text-lg" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="SEARCH CATALOGUE..."
        className="w-full bg-transparent py-6 pl-14 pr-6 outline-none font-bold text-xs tracking-widest uppercase placeholder:text-gray-300 text-black"
      />
    </div>

    {/* Category Filtering Dropdown */}
    <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-200 relative flex items-center">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full h-full bg-transparent pl-6 pr-12 py-6 outline-none font-bold text-xs tracking-widest uppercase appearance-none cursor-pointer text-gray-600 focus:text-black"
      >
        <option value="all">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="tablets">Tablets</option>
        <option value="mobile-accessories">Mobile-Accessories</option>
      </select>
      <FiChevronDown className="absolute right-6 pointer-events-none text-gray-400" size={16} />
    </div>

    {/* Sort Engine Dropdown */}
    <div className="md:col-span-3 relative flex items-center">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full h-full bg-transparent pl-6 pr-12 py-6 outline-none font-bold text-xs tracking-widest uppercase appearance-none cursor-pointer text-gray-600 focus:text-black"
      >
        <option value="default">Sort By</option>
        <option value="low">Price: Low-High</option>
        <option value="high">Price: High-Low</option>
      </select>
      <FiChevronDown className="absolute right-6 pointer-events-none text-gray-400" size={16} />
    </div>
  </section>
)