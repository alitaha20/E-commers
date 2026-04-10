"use client"

import React, { useContext } from 'react'
import { CiHeart } from 'react-icons/ci'
import { addProductInWishlist } from '../_action/wishlist.action'
import { toast } from 'sonner'

export default function AddCartToWish({productId} : {productId : string}) {



 async function handelWishlist() {


        const res = await addProductInWishlist(productId)

        if(res.status == "success"){
            toast.success(res.message , {
                position:'top-center' ,
                richColors: true 
            })

        

        }

    }



  return (
    <button  onClick={handelWishlist}  type='button' 
    className='w-8 h-8 p-[8] cursor-pointer drop-shadow-xl border rounded-full text-2xl  flex justify-center items-center'>
        <CiHeart />.
         </button >
  )
}
