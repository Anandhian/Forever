import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tilte from './Tilte'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const {products}=useContext(ShopContext)
    const [seller, setBestSeller] = useState([])
    useEffect(()=>{
        const bestproducts=products.filter(item=>item.bestseller)
        setBestSeller(bestproducts.slice(0,5))
    },[])
  return (
    <div>
         <div className='my-10 text-center'>
                <Tilte text1='Best ' text2='Seller' />
                <p className='text-gray-500 sm:text-xs md:text-base w-3/4 mx-auto'>Discover the latest trends and styles in our new collection.</p>

        </div>
        <div className='grid grid-cols-2  sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
            {
                seller.map((item,index)=>(
                    <ProductItem key={index } id={item._id} image={item.image} name={item.name} price={item.price} currency={item.currency} />
                ))
            }

        </div>
    </div>
  )
}

export default BestSeller