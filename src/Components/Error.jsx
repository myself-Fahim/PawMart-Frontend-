import React from 'react';
import error from '../../src/assets/error-404.png'
import { useNavigate } from 'react-router';

const Error = () => {
    const navigator = useNavigate()
    const handleBack = () =>{
        navigator(-1)
    }
    return (
        <div>
           <div className='bg-[#E5E7EB] min-h-screen flex flex-col items-center justify-center'>
                <div className='w-[250px] h-[250px] pb-[16px]'>
                    <img className='h-full w-full' src={error} alt="" />
                </div>
                <h1 className='text-3xl font-[inter] font-bold pb-2'>Oops, page not found!</h1>
                <p className='font-[inter] text-center md:text-start text-[#627382] text-[0.58] pb-4'>The page you are looking for is not available.</p>

                <button onClick={handleBack}  className='btn bg-gradient-to-r px-7 from-[#632EE3] to-[#9F62F2] border'>
                    <h1 className='text-[white] font-[inter]'>Go Back</h1>
                </button>

            </div>
        </div>
    );
};

export default Error;