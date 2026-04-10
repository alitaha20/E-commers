import { DataWishlist } from "./brands";

 
export default async function Disgin({item}: {item : DataWishlist}) {



  return (<>
  <div className=' w-[234] h-[288px] rounded-2xl border flex flex-wrap items-center justify-center'>
    <div className='w-full h-[192] p-4'>
        <img src={item.image} alt={item.name} className='w-full' />
    </div>
    <div>
        <span>{item.name}</span>
    </div>

  </div>
  </>
  )
}
