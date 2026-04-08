"use client"
import React, { useContext } from 'react'
import img from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import { cartContext } from '../_context/CartContextProvider'

export default function allorders() {





  return (
<>

<div className=' w-10/12 mx-auto my-10'>

<div className=' flex items-center justify-between'>
    
    <div> 
        <h1 className='font-bold text-lg'>My Orders</h1> 
        <p >Track and manage your 8 orders</p>
    </div>

    <div><p className='font-medium text-lg text-[#16A34A]'>Continue Shopping</p></div>


    <div></div>
 </div>

<div className='border border-green-200 '>

    <div className='p-2 grid grid-cols-12 gap-5'>


        <div className='grid col-span-2 p-3 '>
        <img src={img.src} alt="asdasd" className='w-full'  />
        </div>



        <div  className='grid col-span-10'>
            <div className='flex flex-wrap'>
              <span className='py-1 px-2 w-[102] h-[26] text-center bg-[#FEF3C6] text-[#E17100] rounded-full'> Processing</span>
            <span className=' w-full'># 76671</span>
            </div>

            <div className=' flex gap-4 font-medium text-[#6A7282]'>
                <div> Feb 8, 2026</div>
                <div>18 items</div>
                <div>مدينة نصر</div>
            </div>

            <div>

                <p className='font-bold text-lg'>261,743 <span className='text-[#6A7282]'>EGP</span></p>
            </div>


        </div>
    </div>
</div>

</div>
</>
  )
}
