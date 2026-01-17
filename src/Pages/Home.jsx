import React from 'react';
import Slider from '../Components/Slider';
import usePetData from '../Hooks/usePetData';
import PetCard from '../Components/PetCard';
import PetExperts from '../Components/PetExperts';
import Loader from '../Components/Loader';
import { Link } from 'react-router';

import Navbar from '../Components/Navbar';

const Experts = [
    {
        "name": "Dr. Hasan Karim",
        "fieldRelatedToPetCare": "Veterinary Medicine (Small Animals)",
        "experience": "5 years",
        "image": "https://i.ibb.co.com/R4kfVmsw/premium-photo-1661492071612-98d26885614a-fm-jpg-q-60-w-3000-ixlib-rb-4-1.jpg"
    },
    {
        "name": "Dr. Steve Martin",
        "fieldRelatedToPetCare": "Pet Nutrition & Dietary Planning",
        "experience": "4 years",
        "image": "https://i.ibb.co.com/mFyRFzvP/ai-generated-a-man-in-a-white-coat-holding-a-small-dog-photo.jpg"
    },
    {
        "name": "Dr. Mark Austin",
        "fieldRelatedToPetCare": "Animal Behavior & Training",
        "experience": "6 years",
        "image": "https://i.ibb.co.com/FLx9xj9J/medium-shot-doctor-using-his-tablet-23-2148231325.jpg"
    }
]

const Home = () => {
    const { pets, loader } = usePetData()


    return (
        <>
            <Navbar></Navbar>
            <div className='mb-[70px]'>
    
                <Slider></Slider>

                <h1 className='font-bold text-2xl text-center mt-20'>Categories</h1>
                <section className='mb-20 mt-10 flex flex-col items-center md:flex-row justify-center gap-8'>
                    <Link to={`categories/pet`} className='w-[300px] h-[200px] bg-yellow-600 rounded-[40px] flex items-center justify-center'>
                        <h1 className='text-white font-bold text-2xl'>Pet</h1>
                    </Link>
                    <Link to={`categories/food`} className='w-[300px] h-[200px] bg-green-600 rounded-[40px] flex items-center justify-center'>
                        <h1 className='text-white font-bold text-2xl'>Food</h1>
                    </Link>
                    <Link to={`categories/accessories`} className='w-[300px] h-[200px] bg-blue-600 rounded-[40px] flex items-center justify-center'>
                        <h1 className='text-white font-bold text-2xl'>Accessories</h1>
                    </Link>
                    <Link to={`categories/care`} className='w-[300px] h-[200px] bg-red-600 rounded-[40px] flex items-center justify-center'>
                        <h1 className='text-white font-bold text-2xl'>Care</h1>
                    </Link>
                </section>


                {
                    loader ? <Loader></Loader>
                        :
                        <section className='mt-[60px] '>
                            <h1 className='text-center font-bold text-2xl mb-[40px]'>Find Your Furry Friend Today!</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20'>
                                {

                                    [...pets].sort((a, b) => b._id.localeCompare(a._id)).slice(0, 6).map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                                }
                            </div>
                        </section>
                }

                <section className='my-[90px]'>
                    <div className='   px-5 lg:px-20 text-justify '>
                        <div className='bg-base-300 p-6 border border-black rounded-[14px] shadow-lg '>
                            <h1 className='text-center font-bold text-2xl mb-5'>Why Adopt from PawMart? </h1>

                            <p className='text-[1rem] text-[grey]'>At PawMart, we believe every pet deserves a loving home. That’s why we make the adoption process safe, simple, and trustworthy for everyone. Our platform connects caring families with pets who are waiting for a second chance—ensuring you find the perfect companion with confidence.Every pet listed on PawMart is posted by verified owners, shelters, or caregivers. We carefully review each profile so you can adopt with peace of mind.From browsing pets to contacting owners, our user-friendly system makes adoption smooth and stress-free, even for first-time pet parents.By adopting through PawMart, you’re giving an animal a chance at a better life. Every adoption helps reduce abandonment and supports responsible pet care in your community.</p>
                        </div>





                    </div>
                </section>


                <section className='mt-[60px]'>
                    <h1 className='font-bold text-2xl text-center mb-[30px]'>Meet Our Pet Heroes</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20'>
                        {
                            Experts.map(expert => <PetExperts key={expert.name} expert={expert}></PetExperts>)
                        }
                    </div>
                </section>

            </div>

        </>

    );
};

export default Home;