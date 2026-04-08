import { ProductType } from '@/Typas/product.type'
import { getAllWishlist } from '../_action/wishlist.action'
import Desing from './Desing'
import { CiHeart } from 'react-icons/ci'

export default async function Wishlist() {
  const res = await getAllWishlist()



  return (<>
  
  <div className=' w-10/12 mx-auto my-10'>
      <div className=' flex  items-center gap-3 '>
    <div className='p-3 rounded-2xl bg-[#FEF2F2] '> <CiHeart className='text-red-700 '/></div>
    <div >
         <h1 className='font-bold text-2xl'>My Wishlist</h1>
         <p className=' font-medium text-[#6A7282]'><span>{res.count}</span> items saved</p>
    </div>
</div>

<div className=' flex items-center justify-between py-4 font-medium text-[#6A7282]'>
    <div>Product</div>
    <div>Price</div>
    <div>Actions</div>
</div>


{res.data.map( (items:ProductType)=> <Desing key={items.id} item={items}/>)}

  </div>
  
  

  </> 
   )
}
