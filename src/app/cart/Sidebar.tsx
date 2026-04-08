import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FaBagShopping, FaLock, FaTruck } from 'react-icons/fa6'

export default function Sidebar({cartDataNumber ,numberOfCart} :{cartDataNumber : number  , numberOfCart: number}) {

  return (<>
  
  <div className='bg-green-800 py-4 px-6 rounded-3xl'>

    <div className='flex items-center gap-3 ps-3'>
        <span className='text-white'><FaBagShopping/> </span>
        <h2 className='font-bold text-3xl text-white'>Order Summary</h2>
    </div>

    <div>
        <p className=' font-medium text-sm ps-2 text-[#DCFCE7]'>{numberOfCart} items in your cart</p>
    </div>

  </div>

  <div className='p-5'>
    
  <div className=' flex items-center  gap-3 bg-[#F3F4F6] my-3 w-full mx-auto rounded-2xl p-4'>
   
    <div className=' p-2 bg-[#DCFCE7] text-[#00A63E] rounded-full'>
        <FaTruck/>
    </div>

    <div > 
        <h3 className='font-semibold text-lg text-[#008236]'>Free Shipping!</h3>
        <p className='font-medium text-[12] text-[#00A63E]'>You qualify for free delivery</p>
    </div>

  </div>

  <div className=' text-lg font-medium'>
    <div className=' flex items-center justify-between'>
        <span>Subtotal</span>
        <span> {cartDataNumber}</span>
    </div>    

    <div className='flex items-center justify-between '>
        <span>Shipping</span>
        <span className='  text-[#00A63E]'> Free</span>
    </div>  

    <div className=' flex items-center justify-between my-3'>
        <span>Total</span>
        <span> <span className=' font-bold text-3xl'>{cartDataNumber}</span> EGB</span>
    </div>    
    
  </div>

  <div className=' bg-green-500 py-4 px-6 rounded-2xl'>
    <Link href='/payment' className=' w-full bg-green-500 text-xl font-bold' > <span> <FaLock/></span> Secure Checkout </Link>
  </div>
  

  </div>

  </>
  )
}
