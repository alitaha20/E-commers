import { Button } from '@/components/ui/button'
import image from "@/images/381609d78c4d97f9277837bc4bdf05035b888463.png"
import { FaFacebook, FaGoogle, FaShield, FaTruck } from 'react-icons/fa6'
import LoginPage from './Login'
import { IoReload } from 'react-icons/io5'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

export default function Login() {
  return (<>
  <div className=' w-10/12 mx-auto grid grid-cols-12 gap-8 py-10  ' >


 <div className='  grid col-span-12 md:col-span-6 xl:col-span-6 lg:col-span-6'>
    
<div>
  <img  className='w-[616] h-[384] rounded-xl ' src={image.src} alt=" photo's sign in" />
</div>

<div className=' text-center '>
  
<h2 className=' py-5 font-bold text-3xl'>FreshCart Your One-Stop Shop for FreshProducts</h2>

<p className='font-medium text-lg text-[#4A5565]'>Join thousands of happy customers who trust FreshCart for their dailygrocery needs</p>



</div>
  </div>


  <div className='  grid col-span-12 md:col-span-6 xl:col-span-6 lg:col-span-6'>

    <div className='text-center gap-5'> 
      <h1 className='font-bold text-3xl'> <span className='text-[#16A34A]'>Fresh</span>Cart </h1>
      <span className='font-bold text-3xl '>Welcome Back!</span>
      <p className=' font-medium text-[16]'>Sign in to continue your fresh shopping experience</p>
    </div>

    <div >
      <Button className=' mb-2 p-5 w-full border-2 border-[#E5E7EB] font-medium text-[16] bg-white text-black rounded-2xl'> <FaGoogle className='text-[#FB2C36]' />Continue with Google</Button>
      <Button className='  p-5 w-full  border-2 font-medium  border-[#E5E7EB] text-[16] bg-white text-black rounded-2xl'><FaFacebook className='text-blue-600' /> Continue with Facebook</Button>
    </div>

<LoginPage/>

  </div>


  </div>


  <div className='bg-[#F0FDF4] w-full border-greebg-green-400 p-2 border-2 flex justify-between items-center px-5 py-3'>

<div className=' flex justify-center items-center '>

  <div className='bg-[#DCFCE7] p-2 rounded-2xl flex items-center justify-center me-3'>
    <span className='text-[#16A34A]'> <FaTruck/></span>
    </div>

  <div className=''>
    <h4 className='w-full font-semibold'>Free Shipping</h4>
    <p className='font-medium text-[12]'>On orders over 500 EGP</p>
  </div>

</div>

<div className=' flex justify-center items-center '>

  <div className='bg-[#DCFCE7] p-2 rounded-2xl flex items-center justify-center me-3'>
    <span className='text-[#16A34A]'> <IoReload /></span>
    </div>

  <div className=''>
    <h4 className='w-full font-semibold'>Easy Returns</h4>
    <p className='font-medium text-[12]'>14-day return policy</p>
  </div>

</div>

<div className=' flex justify-center items-center '>

  <div className='bg-[#DCFCE7] p-2 rounded-2xl flex items-center justify-center me-3'>
    <span className='text-[#16A34A]'> <FaShield/></span>
    </div>

  <div className=''>
    <h4 className='w-full font-semibold'>Secure Payment</h4>
    <p className='font-medium text-[12]'>100% secure checkout</p>
  </div>

</div>

<div className=' flex justify-center items-center '>

  <div className='bg-[#DCFCE7] p-2 rounded-2xl flex items-center justify-center me-3'>
    <span className='text-[#16A34A]'> <TfiHeadphoneAlt /></span>
    </div>

  <div className=''>
    <h4 className='w-full font-semibold'>24/7 Support</h4>
    <p className='font-medium text-[12]'>Contact us anytime</p>
  </div>

</div>

  </div>

  
  </>
  )
}
