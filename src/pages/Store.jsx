import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import { StoreHeader } from './store/StoreHeader'
import { StoreControls } from './store/StoreControls'
import { ProductCard } from './store/ProductCard'
import { BuildingSystemCard, DiagnosticModuleCard } from './store/EditorialInserts'
import { StorePagination } from './store/StorePagination'

const Store = () => {
  const {
    filteredProducts,
    loading,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    page,
    nextPage,
    prevPage
  } = useProducts()

  const [hoveredId, setHoveredId] = useState(null)

  // 1. Unified Render State Safeguard Boundary
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] text-black font-sans font-black text-xl tracking-widest uppercase animate-pulse">
        LOADING // ARCHIVE
      </div>
    )
  }

  return (
    <div className="bg-[#fafafa] text-black font-sans antialiased selection:bg-black selection:text-white min-h-screen">
      {/* 2. Page Sub-System Shell Sections */}
      <StoreHeader />
      
      <StoreControls
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {/* 3. Catalog Layout Workspace Grid mapping */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-32 text-sm font-bold uppercase tracking-widest text-gray-400">
            No products match criteria // Go to Next Page
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="contents">
                {/* Inline Editorial Break Injections */}
                {index === 2 && <BuildingSystemCard />}
                {index === 5 && <DiagnosticModuleCard />}

                {/* Core Presentational Card */}
                <ProductCard
                  product={product}
                  isHovered={hoveredId === product.id}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />
              </div>
            ))}
          </div>
        )}

        {/* 4. Navigation Control Deck */}
        <StorePagination 
          page={page} 
          prevPage={prevPage} 
          nextPage={nextPage} 
        />
      </section>
    </div>
  )
}

export default Store