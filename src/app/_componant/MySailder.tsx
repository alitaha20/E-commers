"use client" 

 import { Swiper, SwiperSlide } from 'swiper/react';
 
import { Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface imagesPropsType {
imagescover : string [],
spaceBetween? : number , 
slidesPerView? : number , 
    
}

export default function MySailder ( {imagescover , spaceBetween = 100 ,slidesPerView = 3} :imagesPropsType ) {
  return (
    <Swiper
       modules={[Navigation, Pagination, ]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
      navigation
      pagination={{ clickable: true }}



    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >

{imagescover.map((image) =>  <SwiperSlide className=' py-5   '>
  <div className='relative'>

    <img src={image} className=' h-100 w-full object-cover' alt="image silder" />

    <div className='absolute w-full  flex items-center  bg-linear-to-r from-[#00C950E5] to-[#05DF7280] h-100 top-0 '>


   <div className=' ps-17 '>

       <div className=' '>
        <h1 className='font-bold text-[#FFFFFF] text-3xl'>Fresh Products Deliveredto your Door</h1>
        <p className='font-medium text-lg text-[#FFFFFF]'>Get 20% off your first order</p>
      </div>

      <div className=' font-bold py-5 '>
        <button className='bg-[#FFFFFF] py-2 px-6 rounded-3xl text-[#00C950] me-2'>Shop Now</button>
        <button className='  py-2 px-6 rounded-3xl bg-[#FFFFFF80] text-[#FFFFFF]'>View Deals</button>
      </div>

   </div>

    </div>

  </div>


</SwiperSlide>)}
    </Swiper>


  );
};