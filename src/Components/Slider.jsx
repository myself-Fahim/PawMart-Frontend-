import React from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgImg from '../../assets/BannerImg.jpg'
import { Link } from 'react-router';


const Slider = () => {
    return (

        <div>
            <style jsx>{`
                .mySwiper .swiper-button-next,
                .mySwiper .swiper-button-prev
                 {
                    color: white !important;
                }
                .mySwiper .swiper-pagination-bullet {
                background: white !important;
                }
                .mySwiper .swiper-pagination-bullet-active {
                background: white !important;
                opacity: 1 !important;
                }
            `}</style>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <section
                        className='flex justify-center items-center '
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),url(${bgImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "90vh",
                            opacity: 1.9

                        }}
                    >
                        <div
                            className='animate__animated animate__fadeInDown text-white'
                        >

                            <h1 className=' text-center text-white/60  mb-4 md:mb-9 titan  font-bold text-2xl md:text-3xl lg:text-5xl'>Welcome To PawMart</h1>
                            <h1 className='titan text-center text-xl lg:text-3xl '>COMPASSIONATE CARE FOR EVERY COMPANION</h1>
                              <div className='flex justify-center mt-10  rounded-xl '>
                                 <Link to='/pet_supplies' className='btn  titan px-8 rounded-xl  text-white bg-black/60
                                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-white hover:shadow-lg' >See All</Link>
                            </div>
                           
                        </div>

                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        className='flex justify-center items-center '
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),url(https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "90vh",
                            opacity: 1.9

                        }}
                    >
                        <div
                            className='animate__animated animate__fadeInDown text-white'
                        >

                            <h1 className=' text-center text-white/60  mb-4 md:mb-9 titan  font-bold text-2xl md:text-3xl lg:text-5xl'>Welcome To PawMart</h1>
                            <h1 className='titan text-center text-xl lg:text-3xl '>COMPASSIONATE CARE FOR EVERY COMPANION</h1>
                               <div className='flex justify-center mt-10  rounded-xl '>
                                 <Link to='/pet_supplies' className='btn  titan px-8 rounded-xl  text-white bg-black/60
                                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-white hover:shadow-lg' >See All</Link>
                            </div>
                           
                        </div>

                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        className='flex justify-center items-center '
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),url(https://i.ibb.co.com/k6BPYRCh/fluffy-cat-in-dog-outfit.webp)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "90vh",
                            opacity: 1.9

                        }}
                    >
                        <div
                            className='animate__animated animate__fadeInDown text-white'
                        >

                            <h1 className=' text-center text-white/60  mb-4 md:mb-9 titan  font-bold text-2xl md:text-3xl lg:text-5xl'>Welcome To PawMart</h1>
                            <h1 className='titan text-center text-xl lg:text-3xl '>COMPASSIONATE CARE FOR EVERY COMPANION</h1>
                            <div className='flex justify-center mt-10  rounded-xl '>
                                 <Link to='/pet_supplies' className='btn  titan px-8 rounded-xl  text-white bg-black/60
                                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-white hover:shadow-lg' >See All</Link>
                            </div>
                           

                        </div>

                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;

// https://bestfriendspetcare.com/wp-content/uploads/2023/05/pet-adoption-main-photo-resize-scaled-2.jpg
// https://i.ibb.co.com/k6BPYRCh/fluffy-cat-in-dog-outfit.webp