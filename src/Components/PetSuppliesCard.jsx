import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'
import AuthContext from '../AuthContext/AuthContext';
import Loader from './Loader';
import { FaDollarSign } from "react-icons/fa";


const PetSuppliesCard = ({ pet }) => {
    const { image, category, name, price, location, _id, description } = pet

    return (
        <div>
            <div className=' bg-white rounded-[14px] shadow-sm h-full flex flex-col'>
                <div className='h-[250px] '>
                    <img className='w-full h-full rounded-t-[14px] object-cover ' src={image} alt="" />
                </div>

                <div className='p-8 pt-4'>
                    <h1 className='my-3 text-black/70 font-bold text-2xl'>{name}</h1>
                    <p className='mb-3 text-black/50 font-bold'>{description}</p>
                    <div className='flex flex-wrap gap-2 items-center mb-5'>
                        <div className='flex items-center bg-black/20  py-1 px-3 rounded-xl '>
                            <h1 className='font-bold text-black/70'>{price}</h1>
                            <FaDollarSign className='text-[1rem] text-black/70' />
                        </div>

                        <h1 className='font-bold bg-black/20  py-1 px-3 rounded-xl text-black/70'>{category}</h1>
                        <h1 className='font-bold bg-black/20  py-1 px-3 rounded-xl text-black/70'>{location}</h1>
                    </div>

                    <Link to={`/listdetails/${_id}`} className='btn flex flex-grow justify-center mt-auto bg-black/60 rounded-2xl text-white transition-transform duration-300 ease-in-out hover:scale-102'>See Details</Link>

                </div>


            </div>




        </div>
    );
};

export default PetSuppliesCard;