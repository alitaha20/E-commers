import { GetCategory } from '@/service/Category'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default async function GetAllCategory() {


    const Categorys = await GetCategory()

  return (<>
  <div className=' w-10/12 mx-auto  my-10' >
    <div className=' flex justify-between items-center'>
        <h1 className=' font-bold text-3xl pt-8 pb-8'>Shop By <span className='text-[#009966] font-bold text-3xl'>Category</span></h1>
        <Link href={"/Category"} className=' text-[#16A34A] font-medium text-[12] flex justify-center items-center gap-2'> View All Categories<FaLongArrowAltRight className=' text-[#16A34A]' /> </Link >
    </div>


    <div className=' grid gap-3 grid-cols-2 md:grid-cols-6 xl:grid-cols-6'>

        {Categorys.map ((categort)=> <div className=' p-4 shadow-xl rounded-2xl text-center' key={categort._id}> 

            <img className='w-20 h-20 rounded-full mx-auto' src={categort.image} alt={categort.name } />
            <span className='text-lg font-medium '>{categort.name}</span>

        </div> )}

    </div>
  </div>
  
  
  </>
  )
}
