import React, { useContext } from 'react'
import image from "@/images/381609d78c4d97f9277837bc4bdf05035b888463.png"
import { FaTrash } from 'react-icons/fa6'
import { CategoryType } from '@/Typas/product.type'
import { CartItemsTypes } from '@/Typas/cart.itmes'
import { Button } from '@/components/ui/button'
import { deleteItemFromShop, upDataPRoductCard } from '../_action/cart.action'
import { cartContext } from '../_context/CartContextProvider'
import { toast } from 'sonner'
import { Minus, Plus } from 'lucide-react'

export default function Cartdesgin({items} : {items : CartItemsTypes}) {


 const {setcartDataNumber ,setcartDataProduct ,setnumberOfCart} = useContext(cartContext)



async function handelDelete( id:string ) {

  const res  =  await deleteItemFromShop(id)

  setcartDataNumber(res.data.totalCartPrice)
  setcartDataProduct(res.data.products)
  setnumberOfCart(res.numOfCartItems)

toast.success(res.message, {
    position: 'top-center',
    richColors : true ,
})    
}


async function handelUpDataProduct(id :string , count : number) {
    
   const res = await upDataPRoductCard( id , count)

   if(res.status=="success"){
  setcartDataNumber(res.data.totalCartPrice)
  setcartDataProduct(res.data.products)
  setnumberOfCart(res.numOfCartItems)

toast.success(res.message, {
    position: 'top-left',
    richColors : true ,

}) 

   } else { 
    toast.error(res.message,{
        position:"top-center",
        richColors : true ,
    })
}
}



  return (<>
  
  <div className='p-5 border mb-3 rounded-2xl shadow-2xl'>

<div className=' grid grid-cols-12 gap-5'>

    <div className='col-span-3 p-3'> 
        <img src={items.product.imageCover} alt={items.product.title} className='w-full rounded-[12]' />
        </div>

    <div className=' col-span-9'>

        <h1 className='font-semibold text-lg'> {items.product.title}</h1>

        <div className='my-2'>
            <span className='text-[#15803D] font-medium text-sm rounded-full pe-3 border p-1 border-green-200 bg-green-50 '>{items.product.category.name}</span>
            <span className='font-medium text-[#6A7282] text-sm'>  SKU: 5CA0AD</span>
        </div>

        <div >
            <span className='font-bold text-lg pe-2 text-[#16A34A]'>{items.price} EGP</span>
            <span className='font-medium text-[12] text-[#99A1AF] ms-2'>per unit</span>
        </div>

        <div className='flex justify-between items-center pt-4'>
            <div> 


                <button  type='submit' aria-label='Decrease quantity'
                 className=' p-2 cursor-pointer rounded-2xl'
                 onClick={()=> handelUpDataProduct( items.product.id , items.count - 1 )}
                 >

                    <Minus/>

                </button>

                    <span className=' font-bold text-2xl mx-2 border p-2 rounded-lg text-center '>{items.count}</span>

                
                <button  type='submit' aria-label='Decrease quantity' 
                className=' p-2 cursor-pointer  rounded-2xl'
                onClick={()=> handelUpDataProduct( items.product.id , items.count + 1 )}

                >

                    <Plus />

                </button>
                
                
                
                 </div>

            <div className='flex justify-center items-center'>

                <div >

                <span className='font-medium text-[12] text-[#99A1AF]'>Total</span>
                <h3 className='font-bold text-xl'>{items.price} <span className='font-medium text-[12] text-[#99A1AF]'> EGP</span></h3>

                </div>

                <div className=' px-1 flex justify-center items-center'>
                    <Button onClick={()=> handelDelete(items.product.id)} className='cursor-pointer bg-[#FEF2F2] border border-[#FFC9C9] rounded-[12] text-[#FB2C36] p-3'> <FaTrash/> </Button>
                </div>

            </div>
        </div>
    </div>

</div>
  </div>
  
  </>
  )
}

