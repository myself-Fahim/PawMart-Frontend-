import React from 'react';
import { Link } from 'react-router';

const Category = ({ caategory }) => {
    const { image,name, price, category, location ,_id} = caategory
    return (
        <div>
            <div className=' p-10 shadow-2xl rounded-[14px]'>
                <div className='h-[300px]'>
                    <img className='w-full h-full rounded-xl object-cover' src={image} alt="" />
                </div>
                <p className='my-[20px] text-slate-500 font-bold text-xl'>{name}</p>
                <div className='flex justify-between font-bold mb-4'>
                    <h1 className='font-bold '>Price: {price}$</h1>
                    <h1 className='font-bold '>Category: {category}</h1>
                </div>

                <p className='bg-white px-3 py-1 shadow-2xl  rounded-[14px] border text-black w-fit'><span className='font-bold'>Location : </span>{location}</p>

                <Link to={`/listdetails/${_id}`} className='btn flex  justify-center mt-[20px] bg-slate-500 rounded-xl text-white '>See Details</Link>

            </div>
        </div>
    );
};

export default Category;