"use client"
import { ProductType } from '@/Typas/product.type'
import { FiTrash } from 'react-icons/fi'
import { deleteItems } from '../_action/wishlist.action'
import { useContext } from 'react'
import { wishConstext } from '../_context/WishlistContext'


///// stop in delete items  in here (async , use client) \\\\\\

export default function Desing( {item} : {item : ProductType}) {

    const {getWishList , setgetWishList} = useContext(wishConstext)

    
    async function handelDelete(id:string) {

        console.log("item" ,item)

        const res = await deleteItems(id)

 const newWishlist = await getAllWishlist()
 
  setgetWishList(newWishlist.data)

    }

  return (
    <>


<div className='flex items-center justify-between'>

    <div className='flex items-center justify-center w-1/3 '>

        <div className='w-1/3 gap-5 pe-3'>
            <img src={item.imageCover} alt={item.title} className='w-full rounded-2xl' />
        </div>

        <div>
            <h3 className='font-bold text-lg'>{item.title}</h3>
            <p className=' font-medium text-[#6A7282]'> {item.brand.name}</p>
        </div>

    </div>

    <div className='font-semibold text-2xl w-1/3'>{item.price} EGP</div>


    <div className=' gap-2'>
        <button className=' p-2 bg-[#16A34A] text-white text-lg rounded-xl'> Add To Cart</button>
        <button  onClick={()=>handelDelete(item.id)} className=' cursor-pointer p-2 bg-gray-300 rounded-lg ms-3'> <FiTrash/> </button>
    </div>

</div>

    
    </>
  )
}
