import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tilte from './Tilte'
import ProductItem from './ProductItem'

const LatestColllection = () => {

    const {products} =useContext(ShopContext)
    const [latestProducts,setLatestProducts] = useState([])
    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div>
        <div className='my-10 text-center'>
                <Tilte text1='Latest ' text2='Collection' />
                <p className='text-gray-500 sm:text-xs md:text-base w-3/4 mx-auto'>Discover the latest trends and styles in our new collection.</p>

        </div>
        {/*rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 lg:grid-cols-5 gap-4'>
            {
                latestProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} currency={item.currency} />
                ))
            }
        </div>
    
    </div>
  )
}

export default LatestColllection