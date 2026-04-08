import React from 'react'
import img from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import { CategoryType } from '@/Typas/product.type'
export default function Disgincatorgy({itme}:{itme:CategoryType}) {
  return (
    <div className=' w-[281.6099853515625] mx-auto'>

  <div className='  rounded-2xl border flex flex-wrap items-center justify-center'>
    <div className=' p-4 text-center '>
        <img src={itme.image} alt={itme.name} className='w-[231.61000061035156] h-[231.61000061035156] mx-auto' />
    </div>
    <div>
        <span>{itme.name}</span>
    </div>

  </div>
        </div>
  )
}
