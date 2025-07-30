import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tilte from './Tilte'
import ProductItem from './ProductItem'

const RelatedProducts = ({category,SubCategory}) => {
    const {products}=useContext(ShopContext)
    const [related,setrelated]=useState([])
    useEffect(()=>{
        if(products.length>0){
            let productCopy=products.slice();
            productCopy=productCopy.filter((item)=>category===item.category)
            productCopy=productCopy.filter((item)=>SubCategory===item.SubCategory)
            setrelated(productCopy.slice(0,5))
            console.log(productCopy.slice(0,5))
        }
        

    },[products])





  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Tilte text1={'Related'} text2={'Products'}></Tilte>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3'>
            {
                related.map((item,index)=>{
                    return <ProductItem key={index} id={item._id} name={item.name} image={item.image}
                     price={item.price}></ProductItem>
                })
            }

        </div>
    </div>
  )
}

export default RelatedProducts