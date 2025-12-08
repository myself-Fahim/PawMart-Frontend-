import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PetSuppliesCard from '../Components/PetSuppliesCard';
import Loader from '../Components/Loader';

const Pet_Supplies = () => {

    const [loading, setLoading] = useState(false)
    const petData = useLoaderData()
    const [CategoryName, setCategoryName] = useState('Select Category');

    const SearchCategory = petData ?
     CategoryName === 'Select Category' || CategoryName === 'All Data' ? petData
        : petData.filter(data => data.category.toLowerCase().includes(CategoryName.toLowerCase())) : []
        

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [CategoryName])


    return (
        <div className='mt-15 mb-20 px-[20px] lg:px-[70px]'>

            <div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-between'>
                <h1 className='font-bold text-2xl'>Total Data ({SearchCategory.length})</h1>

                <select onChange={(e) => setCategoryName(e.target.value)} name='category' defaultValue="Select Category" className="select select-secondary">
                    <option disabled={true}>Select Category</option>

                    <option>All Data</option>
                    <option>Pet</option>
                    <option>Food</option>
                    <option>Accessories</option>
                    <option>care</option>

                </select>
            </div>


            {
                loading ? <Loader></Loader> : <div>
                    {
                        SearchCategory.length ?
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10  '>
                                {
                                    SearchCategory.map(pet => <PetSuppliesCard key={pet._id} pet={pet}></PetSuppliesCard>)
                                }
                            </div>
                            :
                            <p className='text-center text-[grey] mt-50 font-bold text-2xl'>No Available Data</p>

                    }
                </div>

            }


        </div>


    );
};

export default Pet_Supplies;