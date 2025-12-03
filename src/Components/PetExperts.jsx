import React from 'react';

const PetExperts = ({expert}) => {
    const {name,fieldRelatedToPetCare,experience,image} = expert
    return (
        <div>
            <div className=' p-10 shadow-2xl rounded-[14px]'>
                <div className='h-[300px] mb-[20px]'>
                    <img className='w-full h-full rounded-xl object-cover' src={image} alt="" />
                </div>
                <p className='text-[1.1rem] font-bold text-slate-500'>{name}</p>
                <p className='my-[10px] font-bold'>{fieldRelatedToPetCare}</p>
                <p className='text-[grey] font-bold'>{experience}</p>

                <button className='btn block mt-[20px] bg-slate-500 rounded-xl text-white m-auto'>Book Appoinment</button>

            </div>

        </div>
    );
};

export default PetExperts;