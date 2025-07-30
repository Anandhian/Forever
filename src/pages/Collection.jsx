import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Tilte from '../components/Tilte'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search } = useContext(ShopContext)
  const [showfilter, setshowfilter] = useState(false)
  const [filterproducts, setfilterproducts] = useState([])
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [sortOption, setSortOption] = useState('Relevant')

  // Toggle main category
  const toggleCategory = (e) => {
    const value = e.target.value
    setcategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  // Toggle subcategory
  const toggleSubCategory = (e) => {
    const value = e.target.value
    setsubcategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  // Sort handler
  const handleSortChange = (e) => {
    setSortOption(e.target.value)
  }

  // Filter + search + sort logic
  useEffect(() => {
    let filtered = [...products]

    // Category Filter
    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category))
    }

    // Subcategory Filter
    if (subcategory.length > 0) {
      filtered = filtered.filter(item => subcategory.includes(item.subCategory))
    }

    // Search Filter (case-insensitive match on name)
    if (search.trim() !== '') {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Sort
    if (sortOption === 'High to Low') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortOption === 'Low to High') {
      filtered.sort((a, b) => a.price - b.price)
    }

    setfilterproducts(filtered)
  }, [category, subcategory, sortOption, products, search])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className='min-w-60'>
        <p onClick={() => setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`w-4 sm:hidden h-3 ${showfilter ? 'rotate-180' : ''}`} src={assets.dropdown_icon} alt="dropdown" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='font-medium mb-3 text-sm'>Category</p>
          <div className='flex flex-col gap-4 text-gray-500'>
            {['Men', 'Women', 'Kids'].map(cat => (
              <label key={cat} className='flex gap-3'>
                <input onChange={toggleCategory} type="checkbox" value={cat} className='w-3' />{cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='font-medium mb-3 text-sm'>Type</p>
          <div className='flex flex-col gap-4 text-gray-500'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
              <label key={type} className='flex gap-3'>
                <input type="checkbox" onChange={toggleSubCategory} value={type} className='w-3' />{type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Display */}
      <div className='flex-1'>
        <div className='flex justify-between items-center text-base sm:text-xl'>
          <Tilte text1="All" text2="Collection" />
          <select className='border border-gray-300' onChange={handleSortChange}>
            <option value="Relevant">Sort by: Relevant</option>
            <option value="High to Low">Sort by: High to Low</option>
            <option value="Low to High">Sort by: Low to High</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
          {filterproducts.length > 0 ? (
            filterproducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500'>No products found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection

