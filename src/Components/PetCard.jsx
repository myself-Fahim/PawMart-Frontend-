import React from 'react';
import { Link, useNavigate } from 'react-router';

const PetCard = ({ pet }) => {
    const navigator = useNavigate()
    const { image,name,category,price,_id} = pet
  
    return (
        <div className=' p-10 shadow-2xl rounded-[14px]'>
            <div className='h-[300px]'>
                <img className='w-full h-full rounded-xl object-cover' src={image} alt="" />
            </div>
            <p className='my-[20px] text-slate-500 font-bold text-[1.1rem]'>{name}</p>
            <div className='flex justify-between'>
                <h1><span className='font-bold'>Price: </span>{price}$</h1>
                <h1><span className='font-bold'>Category: </span>{category}</h1>
            </div>

            <Link to={`/listdetails/${_id}`} className='btn flex  justify-center mt-[20px] bg-slate-500 rounded-xl text-white '>See Details</Link>

        </div>
    );
};

export default PetCard;