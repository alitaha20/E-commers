import { Shield } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle, FaStar, FaTruck } from 'react-icons/fa6'
import FormSignUP from './FormSignUP'

export default function SignUp() {
  return (<>
  
  <div className=' w-10/12 mx-auto pt-10 grid grid-cols-12'> 
  
  <div className=' grid col-span-12 md:col-span-6 xl:col-span-6 lg:col-span-6'>

    <div className=' w-fit'> 
      <p className='font-bold text-3xl'>Welcome to <span className=' text-[#16A34A]'> FreshCart</span></p>
    </div>

    <div className='w-fit'>
      <p className=' font-medium text-xl text-[#364153]'>join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.</p>
    </div>

    <div>


      <div className=' flex items-center gap-4 '>
        <div className='w-12 h-12 rounded-full bg-[#BBF7D0] text-[#16A34A]  flex justify-center items-center'><span> <FaStar /></span></div>
        <div>
          <h4>Premium Quality</h4>
          <p>Premium quality products sourced from trusted suppliers.</p>
        </div>
      </div>

     <div className=' flex items-center gap-4 py-3'>
        <div className='w-12 h-12 rounded-full bg-[#BBF7D0] text-[#16A34A]  flex justify-center items-center'> <span className=''> <Shield /></span></div>
        <div >
          <h4>Secure Shopping</h4>
          <p>Your data and payments are completely secure</p>
        </div>
      </div>

           <div className=' flex items-center gap-4'>
        <div className='w-15 h-13 rounded-full bg-[#BBF7D0] text-[#16A34A]  flex justify-center items-center '><span> <FaTruck /> </span></div>
        <div >
          <h4>Fast Delivery</h4>
          <p>Same-day delivery available in most areasPremium quality products sourced from trusted suppliers.</p>
        </div>
      </div>

    </div>
  </div>


  <div className='   grid col-span-12 md:col-span-6 xl:col-span-6 lg:col-span-6' >

    <div className=' text-center'>

  <div>
    <h1>Create Your Account</h1>
  </div>
  <div>
    <p>Start your fresh journey with us today</p>
  </div>
  
  

</div>

  <FormSignUP/>

  </div>

  
  </div>
  


  
  </>
  )
}
