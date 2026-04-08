import { getAllproduct } from '@/service/Proudct'
import ProductCard from './_componant/ProductCard'
import MySailder from './_componant/MySailder'
import image1 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import image2 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
import image3 from "@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png"
// import GetAllCategory from './_componant/GetAllCategory'
import { lazy, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import DsignHomePage from './_componant/DsignHomePage'
import getToken from './utils/getToken'

  const imagescover =[
    image1.src,
    image2.src,
    image3.src

  ] 

  const GetAllCategoryAsLazyCom = lazy(()=> import("./_componant/GetAllCategory"))

 export default async function Home() {



  const allProduct = await getAllproduct()

  getToken()

  return (
  <>

<MySailder imagescover={imagescover} slidesPerView={1}/>

<Suspense fallback={<div className="flex items-center gap-4 justify-center w-full text-gray-500 ">
      <Skeleton
         className="h-full w-full rounded-full  text-gray-500 " />
      <div className="space-y-2">
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
      </div>
    </div>
   }>

<GetAllCategoryAsLazyCom />

<DsignHomePage/>

</Suspense>
<div  className=' w-10/12 p-2 m-auto grid md:grid-cols-4 xl:grid-cols-5 gap-4'>
    {allProduct?.map( (product) =>  <ProductCard key={product.id}  product={product} />)}
</div>
  </>
  )
}
