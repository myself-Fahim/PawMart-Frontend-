import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Components/Loader';
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Navbar from '../Components/Navbar';
import { FaDollarSign } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";
const ListDetails = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const [quantity, setQuantity] = useState(1)
    const { image, category, email, description, price, location, name, _id } = data
    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const buyer = form.name.value
        const email = form.email.value
        const productID = form.productId.value
        const productName = form.productName.value
        const quantity = form.quantity.value
        const price = form.price.value
        const address = form.address.value
        const date = form.date.value
        const number = form.number.value
        const additional = form.additionalInfo.value

        const formData = {
            buyer,
            email,
            price,
            date,
            number,
            productID,
            productName,
            additional,
            quantity,
            address
        }
        axios.post('https://pawmart10.vercel.app/order', formData)
            .then(res => {
                document.getElementById('my_modal_3').close()
                toast.success('Submitted Successfully')
            })
    }



    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <div className="  min-h-screen pt-20  ">
                <div className='flex gap-5 justify-center'>
                    <div className='h-130 w-130  rounded-md '>
                        <img
                            src={image}
                            className='h-full w-full '
                        />
                    </div>

                    <div className='w-130 p-10 rounded-md'>
                        <div className='flex justify-between items-center'>
                            <h1 className='titan font-bold text-4xl'>
                                {
                                    category == 'pet' ? `${name} - For Adopt` : `${ name } - For Pet`
                                }
                            </h1>
                            <h1 className='bg-black/20 text-xl py-1 px-5 rounded-xl'>{category}</h1>
                        </div>

                        <h1 className='titan  mt-2 text-black/60'>{description}</h1>

                        <div className='flex items-center gap-1 mt-5 mb-1'>
                            <MdEmail className='text-black/50' />
                            <h1 className='font-bold text-[1.2] text-black/50'>{email}</h1>
                        </div>
                        <div className='flex items-center gap-1 mb-7'>
                            <IoLocation className='text-black/50' />
                            <h1 className='font-bold text-[1.2] text-black/50'>{location}</h1>
                        </div>

                        <div className='border-b '>
                            <div className='flex items-center mb-5'>
                                <FaDollarSign className='text-4xl titan'></FaDollarSign>
                                <h1 className='text-4xl font-bold titan'>{price}</h1>

                            </div>
                        </div>


                        <div className=' mt-10 flex justify-between items-center'>


                            <div className=' border w-fit px-1 rounded-md'>
                                <div className='flex items-center gap-3'>
                                    <button onClick={quantity > 1 ? () => setQuantity(quantity - 1) : quantity} className='cursor-pointer'>
                                        <HiMinusSm />
                                    </button>
                                    <h1>{quantity}</h1>
                                    <button onClick={() => setQuantity(quantity + 1)} className='cursor-pointer'>
                                        <GoPlus className='font-bold' />
                                    </button>
                                </div>
                            </div>

                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className=' btn bg-black/60  text-white rounded-lg '>Order Now</button>

                        </div>
                    </div>
                    <dialog id="my_modal_3" className="modal my-15">
                        <div className="modal-box">
                            <form method="dialog">
                            
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h1 className='mb-5 font-bold '>Fill the form</h1>
                            <form onSubmit={handleSubmit} className >

                                <fieldset className="fieldset w-full  block mx-auto mx-10  py-8 border-base-300 rounded-box  border p-4">

                                    <label className="label font-bold">Buyer Name</label> <br />
                                    <input value={user.displayName} type="text" name='name' className="input w-full" placeholder="Name" /> <br />

                                    <label className="label font-bold pt-5">Email</label> <br />
                                    <input value={user.email} type="email" name='email' className="input input w-full" placeholder="Email" /> <br />


                                    <label className="label font-bold pt-5">Product/Listing ID</label> <br />
                                    <input value={_id} type="text" name='productId' className="input w-full" placeholder="ID" /> <br />

                                    <label className="label font-bold pt-5">Product/Listing Name</label> <br />
                                    <input value={name} type="text" name='productName' className="input w-full" placeholder="Name" /> <br />

                                    <label className="label font-bold pt-5">Product Quantity</label> <br />
                                    <input defaultValue={category == 'pet' ? 1 : ''} type="number" name='quantity' className="input  w-full" placeholder="Quantity" /> <br />

                                    <label className="label font-bold pt-5">Product Price</label> <br />
                                    <input value={`${price} $`} type="text" name='price' className="input w-full" placeholder="Price" /> <br />

                                    <label className="label font-bold pt-5"> Address</label> <br />
                                    <input required type="text" name='address' className="input w-full" placeholder="Enter Address" /> <br />

                                    <label className="label font-bold pt-5">Date</label> <br />
                                    <input required type="date" name='date' className="input  w-full" /> <br />

                                    <label className="label font-bold pt-5">Phone Number</label> <br />
                                    <input required type="number" name='number' className="input w-full" placeholder="Phone" /> <br />

                                    <label className="label font-bold pt-5">Additional Info</label> <br />
                                    <input type="text" name='additionalInfo' className="input w-full" placeholder="Additional" /> <br />


                                    <button className='btn mt-6 block mx-auto mb-5 bg-slate-500 text-white px-5'>Submit</button>



                                </fieldset>
                            </form>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default ListDetails; <h1>ListDetails</h1>