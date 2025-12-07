import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ListDetails = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { image, category, email, description, price, location, name, _id } = data

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
        axios.post('http://pawmart10.vercel.app/order',formData)
        .then(res => {
        document.getElementById('my_modal_3').close()
        toast.success('Submitted Successfully')
        }).catch(err =>{
            toast.error('Something went wrong')
            
        })
    
        
    }


    return (
        <div>
            <Toaster></Toaster>
            <div className=" bg-base-200  min-h-screen pt-20 px-[20px] lg:px-[40px]">
                <div className=" grid grid-cols-1 gap-10 px-6 lg:px-0 lg:grid-cols-[1fr_1fr] items-center  bg-white py-10 lg:pl-10 rounded-[15px]">
                    <div className='flex flex-col  w-full lg:w-auto border-b pb-20 lg:border-b-0 lg:pb-0 lg:flex-row items-center lg:border-r lg:pr-20'>
                        <img
                            src={image}
                            className="max-w-[200px] mb-10 lg:mr-8 rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-3xl text-center lg:text-start font-bold">{name}</h1>
                            <p className="py-6 text-slate-500 text-center lg:text-start font-bold">
                                {description}
                            </p>
                            <p className='text-xl text-center lg:text-start'><span className='font-bold'>Owner's Mail</span> : {email}</p>
                        </div>
                    </div>


                    <div className='lg:pl-20 text-center lg:text-start'>
                        <h1 className=' text-2xl'><span className='font-bold'>Category</span> : {category}</h1>
                        <h1 className=' text-2xl py-7'><span className='font-bold'>Price</span> : {price}$</h1>
                        <h1 className='text-2xl'><span className='font-bold'>Location </span> : {location}</h1>

                    </div>

                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className='w-fit btn bg-slate-500 mt-10 text-white lg:col-span-2 block mx-auto'>Order Now</button>


                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_3" className="modal my-15">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
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