import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function DsignHomePage() {
  return (<>
  
  
  <div className=' w-10/12 mx-auto grid grid-cols-12 text-white gap-3'>
  
  <div className=' text-[#FFFFFF]  grid col-span-12 md:col-span-6 xl:col-span-6 lg:col-span-6 p-8 bg-linear-to-r rounded-4xl mb-5 from-green-600 to-green-700' >

    <div className='font-medium rounded-2xl bg-[#FFFFFF33] w-fit  p-2 '>
        <p > 🔥Deal of the Day</p>
    </div>

    <div className='py-3'>
        <h3 className='font-bold text-3xl'>Fresh Organic Fruits</h3>
        <p className=' text-[16] text-[#FFFFFFCC] font-medium'>Get up to 40% off on selected organic fruits</p>
    </div>

    <div className=' flex items-center gap-3'>
        <div><p className='font-bold text-3xl'> 40% OFF</p></div>
        <div className='text-[14]  font-medium'> Use code: <span className='font-bold text-[14]'>ORGANIC40</span></div>
    </div>

    <div className='mt-3'>
        <button type='submit' className=' flex rounded-full bg-[#FFFFFF] py-3 px-6 items-center gap-2 text-[#009966] font-semibold cursor-pointer'> Shop Now <FaArrowRight/></button>
    </div>

  </div>



    <div className=' text-[#FFFFFF]  grid col-span-12 md:col-span-6 xl:col-span-6 lg:col-span-6 p-8 bg-linear-to-r rounded-4xl mb-5 from-orange-400 to-orange-600' >

    <div className='font-medium rounded-2xl bg-[#FFFFFF33] w-fit  p-2 '>
        <p > ✨ New Arrivals</p>
    </div>

    <div className='py-3'>
        <h3 className='font-bold text-3xl'>Exotic Vegetables</h3>
        <p className=' text-[16] text-[#FFFFFFCC] font-medium'>Discover our latest collection of premium vegetables</p>
    </div>

    <div className=' flex items-center gap-3'>
        <div><p className='font-bold text-3xl'> 25% OFF</p></div>
        <div className='text-[14]  font-medium'> Use code: <span className='font-bold text-[14]'>FRESH25</span></div>
    </div>

    <div className='mt-3'>
        <button type='submit' className=' flex rounded-full bg-[#FFFFFF] py-3 px-6 items-center gap-2 text-[#FF6900] font-semibold cursor-pointer'>  Explore Now <FaArrowRight/></button>
    </div>

  </div>

  
  </div>
  
  
  </>
  )
}
