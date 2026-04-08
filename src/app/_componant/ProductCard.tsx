import { ProductType } from '@/Typas/product.type'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import { FiStar } from 'react-icons/fi'
import AddCartBtn from './AddCartBtn'
import AddCartToWish from './AddCartToWish'

interface ProductCardType {

    product : ProductType
}

export default function ProductCard( {product}  : ProductCardType) {

  return (<>

  
  
<div className=' border border-[#E5E7EB] rounded-lg p-2 relative ' >

  <div className=' absolute top-3 right-2 '>

    <AddCartToWish productId={product.id}/>
    <Link href={`/product/${product.id}`} className='w-8 h-8 p-[8] cursor-pointer drop-shadow-xl border rounded-full text-2xl flex justify-center items-center my-2'><EyeIcon/> </Link >

    
    </div>  


    <img src={product.imageCover} className='w-full object-cover' alt="logo" />
    <p className='text-xs py-1 text-[#6A7282]'>{product.slug.split("-" , 2).join("") }</p>
    <h1 className='font-semibold'>{product.title.split(" ", 2).join("")}</h1>
    <div className='flex  gap-2 items-center'> <FiStar className=' text-yellow-500'/>  <span> {product.ratingsAverage}</span></div>

    <div className=' flex justify-between items-center'>

         <div>  {product.priceAfterDiscount ?  <div> <span className='text-[#16A34A] text-lg '>{product.priceAfterDiscount} EGP</span> <span className='line-through font-bold '> {product?.price} EGP</span></div>: <span className='text-lg font-bold'> {product.price} EGP </span> }  </div>
   
<AddCartBtn productid={product.id}/>
   
    </div>


</div>
  
  
  </>
  )
}
