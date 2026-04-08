"use client"

import { useContext } from 'react'
import Cartdesgin from './Cartdesgin'
import Sidebar from './Sidebar'
import { cartContext } from '../_context/CartContextProvider'
import { CategoryType } from '@/Typas/product.type'


export default function Shop() {

  

 const {numberOfCart ,cartDataProduct , cartDataNumber}  = useContext(cartContext)

  return (<>
  
{!cartDataProduct ?  <div className=' h-screen flex items-center justify-center font-black text-2xl '> No Product Yet!!</div>  
: 
  <div className='w-10/12 mx-auto grid grid-cols-12  pt-10 '>

  <div className='   col-span-12 md:col-span-8 pe-3 '> 

    {cartDataProduct.map( (items : CategoryType) => <Cartdesgin key={items._id} items={items}/>)}

  </div>


  <div className='  h-fit col-span-12  md:col-span-4 rounded-3xl border shadow'> <Sidebar  cartDataNumber={cartDataNumber} numberOfCart={numberOfCart}/></div>



  </div>
   }
  
  
  </>
  )
}
