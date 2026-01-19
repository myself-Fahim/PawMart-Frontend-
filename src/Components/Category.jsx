import React from 'react';
import { Link, useNavigate } from 'react-router';
import { FaDollarSign } from "react-icons/fa";



const Category = ({ caategory }) => {
    const { image, name, price, category, location, _id, description } = caategory
    const navigator = useNavigate()
    const handleDetails = () => {
        navigator(`/listdetails/${_id}`)
    }


    return (

        <>
              <div className='bg-white rounded-[14px] shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105'>
                    <div className='h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px] overflow-hidden rounded-t-[14px]'>
                        <img
                            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                            src={image}
                            alt={name}
                        />
                    </div>

                    <div className='p-4 sm:p-5 md:p-8 pt-3 sm:pt-4 md:pt-4 flex flex-col flex-grow'>
                        <h1 className='text-lg sm:text-xl md:text-2xl text-black/70 font-bold mb-2 line-clamp-2'>
                            {name}
                        </h1>


                        <p className='my-3 text-sm sm:text-base text-black/50 font-bold mb-4 line-clamp-2'>
                            {description}
                        </p>

                        <div className='flex flex-wrap gap-2 items-center mb-4 sm:mb-5'>

                            <div className='flex items-center  bg-black/20 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl transition-all duration-300 hover:bg-black/30'>
                                <span className='font-bold text-xs sm:text-sm text-black/70'>{price}</span>
                                <FaDollarSign className='text-[0.8rem]'></FaDollarSign>

                            </div>


                            <span className='font-bold text-xs sm:text-sm bg-black/20 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl text-black/70 transition-all duration-300 hover:bg-black/30'>
                                {category}
                            </span>


                            <span className='font-bold text-xs sm:text-sm bg-black/20 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl text-black/70 transition-all duration-300 hover:bg-black/30'>
                                {location}
                            </span>
                        </div>

                        <button
                            onClick={handleDetails}
                            className='btn flex justify-center mt-auto bg-black/60 rounded-2xl text-white text-sm sm:text-base py-2.5 sm:py-3 px-4 transition-all duration-300 ease-in-out hover:bg-black/80 active:scale-95 font-medium'
                        >
                            See Details
                        </button>
                    </div>
                </div>
            
        </>


    );
};

export default Category;