import React from 'react'
import { TbBrandStackshare } from 'react-icons/tb'
import Disginbrands from './Disgin'
import { getAllBrands } from '../_action/brands.action'
import Disgin from './Disgin'
import { BrandTypes, DataWishlist } from './brands'

export default async function brands() {


  const items : BrandTypes = await getAllBrands()

  
  return (
<div>

      <div className='bg-linear-to-r from-[#7F22FE] to-[#C27AFF] p-5'>

<div className=' flex items-center w-10/12 mx-auto'>
  <div className=' text-[#FFFFFF]'>
    <h1 className='font-bold text-3xl'>Top Brands</h1>
    <p className='font-medium '>Shop from your favorite brands</p>
  </div>

</div>



    </div>

    <div className=' p-5 flex justify-center items-center flex-wrap  gap-3'>

{items.data.map((item : DataWishlist)=> <Disgin key={item._id} item={item}/>)}

</div>

</div>
  )
}


