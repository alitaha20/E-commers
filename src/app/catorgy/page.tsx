import React from 'react'
import Disgincatorgy from './Disgin'
import { getAllCategoris } from '../_action/catogry.action'
import { CategoryType } from '@/Typas/product.type'

export default async function catorgy() {
    const items = await getAllCategoris()
  return (
    <>
    <div>
    
          <div className='bg-linear-to-r from-[#16A34A] to-[#4ADE80] p-5'>
    
    <div className=' flex items-center w-10/12 mx-auto'>
      <div className=' text-[#FFFFFF]'>
        <h1 className='font-bold text-3xl'>Top Categoris</h1>
        <p className='font-medium '>Browse our wide range of product categories</p>
      </div>
    
    </div>
    
    
    
        </div>
    
        <div className=' flex flex-wrap items-center  gap-2 py-10'>
        {items.data.map((itme:CategoryType) => <Disgincatorgy key={itme._id}  itme={itme}/>)}
    </div>
    
    </div>
    
    
    
    </>
  )
}
