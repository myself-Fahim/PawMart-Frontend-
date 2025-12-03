import React from 'react';
import { useNavigate } from 'react-router';

const PetCard = ({ pet }) => {
    const navigator = useNavigate()
    const { image,serviceName,rating,price,serviceId} = pet
    
    const handleDetails = () =>{
        navigator(`/details/${serviceId}`)
    }
    return (
        <div className=' p-10 shadow-2xl rounded-[14px]'>
            <div className='h-[300px]'>
                <img className='w-full h-full rounded-xl object-cover' src={image} alt="" />
            </div>
            <p className='my-[20px] text-slate-500 font-bold text-[1.1rem]'>{serviceName}</p>
            <div className='flex justify-between font-bold'>
                <h1>Price: {price}$</h1>
                <h1>Rating: {rating}</h1>
            </div>

            <button onClick={handleDetails} className='btn block mt-[20px] bg-slate-500 rounded-xl text-white m-auto'>View Details</button>

        </div>
    );
};

export default PetCard;