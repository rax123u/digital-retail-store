const TECH_CATEGORIES = [
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",
  "smartwatches",
  "computers",
  "gaming",
  "airpdos"
]

export const getProducts = async (limit = 12, skip = 0) => {
  const requests = TECH_CATEGORIES.map(cat =>
    fetch(`https://dummyjson.com/products/category/${cat}`).then(res => res.json())
  )
  
  const results = await Promise.all(requests)

  let allProducts = results.flatMap(r => r.products)

  const paginated = allProducts.slice(skip, skip + limit)

  return {
    products: paginated,
    total: allProducts.length
  }
}

export const getProductById = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return data
}