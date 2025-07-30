import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams()
  const { products,currency,addtocart,cartItems } = useContext(ShopContext)
  const [productData, setproductData] = useState(false)
  const [image, setimage] = useState('')
  const [size, setsize] = useState('')

  const fetchProductdata = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item)
        setimage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductdata()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity duration-300 opacity-100 ease-in'>
      <div className='flex gap-12 sm:flex-row flex-col sm:gap-12'>

        {/* Image Section */}
        <div className='flex-1 flex sm:flex-row-reverse flex-col-reverse gap-3'>

          {/* Main Image on the Right */}
          <div className='sm:w-[80%] w-full'>
            <img src={image} alt="Main Product" className='w-full h-auto rounded-lg' />
          </div>

          {/* Thumbnails on the Left */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto sm:h-[500px] justify-between sm:justify-normal gap-2 sm:gap-3 pr-2'>
            {
              productData.image.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setimage(item)}
                  src={item}
                  alt={`Product Thumbnail ${index}`}
                  className={`w-[24%] sm:w-[100px] h-auto cursor-pointer rounded border-2 ${
                    image === item ? 'border-blue-500' : 'border-transparent'
                  }`}
                />
              ))
            }
          </div>

        </div>


        {/*product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3 5' />
             <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
               <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_dull_icon} alt="" className='w-3 5' />
                <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500
           md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setsize(item)} key={index} className={` bg-gray-100 px-4 py-2  ${size===item ? 'border' : ''}`}>
                  {item}
                </button>
              ))}
            </div>

           </div>

           <button onClick={()=>addtocart(productData._id,size)} className='bg-black text-white  px-8 text-sm py-2 active:bg-gray-200 '>Add to Cart</button>
           <hr className='mt-8 sm:w-4/5' />
           <div className='text-sm flex flex-col mt-5 gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
           </div>

        </div>
      </div>

      {/*product description */}
     <div className="px-4 md:px-8 lg:px-16 mt-10">
  {/* Tabs */}
  <div className="flex flex-col sm:flex-row">
    <button className="font-semibold border border-gray-300 px-4 py-2 w-full sm:w-auto text-left sm:text-center">
      Description
    </button>
    <button className="border border-gray-300 px-4 py-2 w-full sm:w-auto text-left sm:text-center">
      Review (122)
    </button>
  </div>

  {/* Content Box */}
  <div className="flex flex-col gap-5 text-gray-600 text-sm border border-gray-300 px-4 py-4 mt-4 rounded-md bg-white">
    <p>
      An e-commerce website is an online platform that facilitates the buying
      and selling of products or services over the internet. It serves as a
      virtual marketplace where businesses and individuals can showcase their
      products, interact with customers, and conduct transactions without the
      need for a physical presence. E-commerce websites have gained immense
      popularity due to their convenience, accessibility, and the global reach
      they offer.
    </p>
    <p>
      E-commerce websites typically display products or services along with
      detailed descriptions, images, prices, and any available variations (e.g.,
      sizes, colors). Each product usually has its own dedicated page with
      relevant information.
    </p>
  </div>
</div>


      {/*related products */}
      <RelatedProducts category={productData.category} SubCategory={productData.SubCategory}></RelatedProducts>

    </div>

     
  ) : (
    <div className='opacity-50'>Loading...</div>
  )
}

export default Product
