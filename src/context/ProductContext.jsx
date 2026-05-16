import { createContext, useContext, useEffect, useState } from 'react'
import { getProducts } from '../services/productService'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // FILTER STATES
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')

  // PAGINATION
  const [page, setPage] = useState(1)
  const limit = 12

  // FETCH ALL PRODUCTS
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      // fetch huge amount once
      const data = await getProducts(100, 0)

      setProducts(data.products)

      setLoading(false)
    }

    fetchData()
  }, [])

  // FILTER PRODUCTS
  let filteredProducts = [...products]

  // SEARCH
  filteredProducts = filteredProducts.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  // CATEGORY
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    )
  }

  // SORT
  if (sort === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  if (sort === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  // PAGINATION AFTER FILTERING
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    endIndex
  )

  // TOTAL PAGES
  const totalPages = Math.ceil(filteredProducts.length / limit)

  // PAGINATION FUNCTIONS
  const nextPage = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }

  // RESET PAGE WHEN FILTERING
  useEffect(() => {
    setPage(1)
  }, [search, category, sort])

  return (
    <ProductContext.Provider value={{
      products,
      loading,

      search,
      setSearch,

      category,
      setCategory,

      sort,
      setSort,

      filteredProducts: paginatedProducts,

      page,
      totalPages,

      nextPage,
      prevPage
    }}>

      {children}

    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)