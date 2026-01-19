import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Category from './Category';
import Loader from './Loader';

const Categories = () => {
    const {categoryName} = useParams()
    const [categories,setCategories] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios(`https://pawmart10.vercel.app/categories/${categoryName}`)
        .then(res=>{
            setCategories(res.data)
            setLoading(false)
        })
    },[categoryName])


    if(loading){
        return <Loader></Loader>
    }

 
    return (
        <div className='mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-[20px] lg:mx-[70px] mt-[40px]'>
            {
                categories.map(caategory => <Category key={caategory._id} caategory={caategory}></Category>)
            }
        </div>
    );
};

export default Categories;