import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Components/Navbar';


const AddListing = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value
        const price =parseInt(form.price.value)
        const location = form.location.value
        const description = form.description.value
        const image = form.image.value
        const date = form.date.value
        const email = form.email.value
        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
        }
        axios.post('https://pawmart10.vercel.app/addlist',formData)
        .then(res => console.log(res))
        .catch(err => console.log(err?.message));
        

        toast.success('Submitted Successfully')
      
       e.target.reset()
    }

    return (
        <>
        <Navbar></Navbar>
          <div className='min-h-screen  flex  justify-center'>
          
            <Toaster></Toaster>
            <form onSubmit={handleSubmit} className='w-full max-w-[600px] mx-4 md:mx-0'>
                <fieldset className="fieldset shadow-2xl my-20 px-7 py-10 border-base-300 rounded-box  ">

                    <label className="label font-bold">Product / Pet Name</label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                        placeholder="Product or Pet Name"
                        required
                    />


                    <label className="label font-bold mt-3">Category</label>
                    <select
                        name="category"
                        className="select  w-full"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="pet">Pet</option>
                        <option value="food">Food</option>
                        <option value="accessories">Accessories</option>
                        <option value="care">Care Products</option>
                    </select>


                    <label className="label font-bold mt-3">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="input input-bordered w-full"
                        placeholder="Price"
                        required
                    />


                    <label className="label font-bold mt-3">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full"
                        placeholder="Location"
                        required
                    />


                    <label className="label font-bold mt-3">Description</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Short description"
                        required
                    ></textarea>


                    <label className="label font-bold mt-3">Image (URL)</label>
                    <input
                        type="url"
                        name="image"
                        className="input input-bordered w-full"
                        placeholder="Image URL"
                        required
                    />


                    <label className="label font-bold mt-3">Pick Up Date</label>
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full"
                        required
                    />

                    <label className="label font-bold mt-3">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered bg-gray-100 w-full"
                        defaultValue={user?.email}
                        readOnly
                    />
                    <button className="btn bg-slate-500 text-white w-full mt-5">Submit</button>
                </fieldset>
            </form>

        </div>
        
        </>
      
    );

};

export default AddListing;