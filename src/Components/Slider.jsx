import React from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const Slider = () => {
    return (
        <div className='px-5 lg:px-20 mt-[70px]'>
            <Swiper pagination={{
                clickable:true
            }} modules={[Pagination]}
            navigation={true} className="mySwiper rounded-[10px] ">
                <SwiperSlide>
                    <div className=' w-full h-[600px]  '>
                        <img src="https://i.ibb.co.com/k6BPYRCh/fluffy-cat-in-dog-outfit.webp" className='w-full object-cover h-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center w-full h-[600px] rounded-md items-center'>
                        <img src="https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg" className='w-full object-cover h-full' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center w-full h-[600px]  rounded-md items-center'>
                      <img src="https://rspca.sfo2.cdn.digitaloceanspaces.com/public/Uploads/adopt-a-pet-adopting-a-dog-selecting-your-dog__FocusFillWzE0NzIsNjI0LCJ5IiwxMDFd.jpg" className='w-full object-cover h-full' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;