"use client"

import React, { useContext } from 'react'
import { addProductToCart } from '../_action/cart.action'
import { toast } from 'sonner';
import { cartContext } from '../_context/CartContextProvider';
import { CartItemsTypes } from '@/Typas/cart.itmes';
import { useCart } from '../_context/usecart';

type CartContextType = {
  setnumberOfCart: React.Dispatch<React.SetStateAction<number>>;
  setcartDataProduct: React.Dispatch<React.SetStateAction<CartItemsTypes[]>>;
  setcartDataNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function AddCartBtn({productid} : {productid:string}) {

  const {setnumberOfCart , setcartDataProduct , setcartDataNumber} :CartContextType = useCart()

 async function handelProductToCart (){

   const res =  await addProductToCart(productid); 


if(res.status = "success"){

  toast.success(res.message , {
    position :"top-center",
    richColors: true
  }) 

    
setnumberOfCart(res.numOfCartItems )
setcartDataProduct(res.data.products)
setcartDataNumber(res.data.totalCartPrice)


}

    

}


  return (<>
    <button onClick={handelProductToCart} className=' cursor-pointer rounded-full bg-[#16A34A] text-white text-2xl w-10 h-10 ' type='submit'> + </button>

  </>
  )
}
