import { Button } from '@/components/ui/button';
import { getPRoductById } from '@/service/Proudct';
import { Heart, ShapesIcon } from 'lucide-react';
import React from 'react'
import { CiDeliveryTruck, CiShoppingCart } from 'react-icons/ci';
import { FaShieldAlt } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { IoReload } from 'react-icons/io5';
import { MdElectricBolt } from 'react-icons/md';

export default  async function page({params} ) {

const {id} =  await params


 const product = await  getPRoductById(id)

  return (<>

<div className=' h-screen w-10/12 mx-auto grid grid-cols-4 gap-4 items-center'>

<div className='bg-red-400 grid lg:col-span-1 sm:col-span-4'> 
    <img src={product?.imageCover} alt={product?.title} />
</div>

<div className=' grid lg:col-span-3  sm:col-span-4 rounded-lg '> 
    

    <div className=' gap-8 py-3 '> 
        <span className='text-[#15803D]  bg-[#F0FDF4] p-2 text-sm rounded-lg'>Women's Fashion</span>
        <span className=' text-[#364153] bg-[#F3F4F6] p-2 text-sm rounded-lg'>DeFacto</span>
    </div>

    <div className='py-3'>
        <h1 className='font-bold text-3xl'>Woman Shawl</h1>
    </div>

    <div className=''>  
        <span className='flex  items-center'> <FiStar className='text-yellow-300' /><FiStar className='text-yellow-300' /><FiStar className='text-yellow-300'/><FiStar className='text-yellow-300'/>  {product?.ratingsAverage} </span>
    </div>

    <div className=' font-bold text-3xl py-3'>
        {product?.price} EGP
    </div>


    <div className='py-2'>
        <span className=' bg-[#F0FDF4] p-2 gap-6 text-[#008236] font-medium rounded-2xl '><span className=' w-2 h-2 rounded-full bg-[#00C950]'></span> in stock</span>
    </div>

    <div className='pt-10'>
        <p className='font-medium text[#4A5565]'>Material Polyester Blend Colour Name Multicolour Department Women</p>
    </div>


    <div className='py-3'>
        <span className=' font-medium text-lg text-[#364153]'>Quantity :</span>
        <div></div>
    </div>

    <div className=' bg-[#F9FAFB] p-2 rounded-lg flex justify-between items-center'>
        <span className=' text-lg  '>Total Price:</span>
        <span className=' font-bold text-3xl text-[#16A34A]'>{product?.price} EGP</span>
    </div>

    <div  className='  flex  py-4'>
        <Button className=' w-1/2 bg-[#16A34A] p-5 cursor-pointer'> <CiShoppingCart/> Add to Cart</Button>
        <Button className=' w-1/2 p-5 cursor-pointer ' >  <MdElectricBolt />Buy Now</Button>
     </div>

     <div>

        <Button className=' w-full rounded-2xl bg-white text-black  border-2 border-black cursor-pointer  p-3'>  <Heart/>Add to Wishlist </Button>

     </div>

     <div className=' flex justify-between items-center px-3 py-2'>

        
     <div className=' flex justify-center items-center'>
        <div className='p-3'><span className='bg-[#DCFCE7] text-[#16A34A] rounded-full'><CiDeliveryTruck /></span></div>
        <div>
            <h3 className='font-medium text-lg'>Free Delivery</h3>
            <span className=' font-medium text-[12] text-[#6A7282]'>Orders over $50</span>
        </div>
     </div>

  <div className=' flex justify-center items-center'>
        <div className='p-3'><span className='bg-[#DCFCE7] text-[#16A34A] rounded-full'><IoReload  /></span></div>
        <div>
            <h3 className='font-medium text-lg'>30 Days Return</h3>
            <span className=' font-medium text-[12] text-[#6A7282]'>Money back</span>
        </div>
     </div>

  <div className=' flex justify-center items-center'>
        <div className='p-3'><span className='bg-[#DCFCE7] text-[#16A34A] rounded-full'><FaShieldAlt /> </span></div>
        <div>
            <h3 className='font-medium text-lg'>Secure Payment</h3>
            <span className=' font-medium text-[12] text-[#6A7282]'> 100% Protected</span>
        </div>
     </div>



     </div>
</div>




</div>
  
  </>
  )
}
