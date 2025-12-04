import React from 'react';

const PetSuppliesCard = ({pet}) => {
    const {image,category,name,price,location} = pet
    
    return (
        <div>
           <div className=' p-10 shadow-2xl rounded-[14px]'>
            <div className='h-[300px]'>
                <img className='w-full h-full rounded-xl object-cover' src={image} alt="" />
            </div>
            <p className='my-[20px] text-slate-500 font-bold text-[1.1rem]'>{name}</p>
            <div className='flex justify-between font-bold'>
                <h1>Price: {category}</h1>
                <h1>Rating: {price}</h1>
            </div>

            <p className='mt-5'><span className='font-bold'>Location:</span>{location}</p>

            <button  className='btn block mt-[20px] bg-slate-500 rounded-xl text-white m-auto'>See Details</button>

        </div>
        </div>
    );
};

export default PetSuppliesCard;