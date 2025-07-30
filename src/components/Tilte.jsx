import React from 'react'

const Tilte = ({text1,text2}) => {
  return (
    <div>
        <div className='inline-flex items-center gap-2 mt-3'>
            <p className='font-medium sm:text-2xl text-gray-500'>
            {text1}
            </p>
            <span className='font-bold sm:text-2xl  text-black '>{text2}</span>
            <hr className='border-none w-8 h-[1px] sm:w-14 sm:h-[2px] bg-black' />
        </div>
    </div>
  )
}

export default Tilte