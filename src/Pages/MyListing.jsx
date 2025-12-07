import React, { useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Loader from '../Components/Loader';
import toast, { Toaster } from 'react-hot-toast';
const MyListing = () => {
    const { user } = useContext(AuthContext)
    const [listing, setListing] = useState([])
    const [listupdateId, setListUpdateId] = useState([])
    const [localLoader,setLocalLoader] = useState(false)
    useEffect(() => {
        setLocalLoader(true)
        fetch(`http://pawmart10.vercel.app/mylistings/${user.email}`)
            .then(res => res.json())
            .then(data => 
            {
                setListing(data)
                setLocalLoader(false)
            })
            .catch(err => console.log(err))
    }, [user.email])


    const handleDelete = (id) => {
        const newListing = listing.filter(list => list._id != id)
        setListing(newListing)
        axios.delete(`http://pawmart10.vercel.app/delete/${id}`)
            .then(res => toast.success('Deleted Successfully'))
         document.getElementById('my_modal_2').close()
    }



    const handleUpdate = (id, e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const category = form.category.value
        const price = form.price.value
        const location = form.location.value
        const description = form.description.value
        const formData = {
            name,
            image,
            category,
            price,
            location,
            description
        }

        // console.log(name,image,category,price)
        axios.put(`http://pawmart10.vercel.app/update/${id}`, formData)
            .then(res => {
                return toast.success('Update Successfully')
            })
            .catch(err => toast.error(err))

        toast.success('Update Successfully')

        setTimeout(() => {
            window.location.reload();
        }, 400);




    }



    return (

        <div>
            <h1 className='font-bold text-center mt-5 text-3xl underline'>My Listings</h1>



            <Toaster></Toaster>
            {
              localLoader?<Loader></Loader>:<div className="overflow-x-auto mt-15 flex md:justify-center">
                    {
                        listing.length == 0 
                            ? <p className='font-bold text-[grey] mt-10'>No Available Data</p>
                            : <table className="table  bg-white shadow-2xl md:max-w-[1000px] pl-5 md:pl-20 mb-[100px]">
                                {/* head */}
                                <thead >
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        listing.map(list => <tr key={list._id} >

                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={list.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-xl">{list.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-xl font-bold'>
                                                {list.category}
                                            </td>
                                            <td className='text-xl font-bold'>{list.price} $</td>
                                            <th>
                                                <div className='flex items-center gap-5'>
                                                    <button onClick={
                                                        () => {
                                                            document.getElementById('my_modal_2').showModal()
                                                            setListUpdateId([list._id, list.name, list.price, list.image, list.description, list.location, list.category])
                                                        }
                                                    } className='btn btn-error text-white'>Delete</button>
                                                    <button onClick={() => {
                                                        document.getElementById('my_modal_3').showModal()
                                                        setListUpdateId([list._id, list.name, list.price, list.image, list.description, list.location, list.category])
                                                    }} className='btn btn-primary'>Update</button>
                                                </div>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                    }
                </div>
                   
            }


            <dialog id="my_modal_3" className="modal my-15">
                <div className="modal-box">
                    <form >
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className='mb-5 font-bold '>Update Data</h1>
                    <form key={listupdateId[0]} onSubmit={(e) => handleUpdate(listupdateId[0], e)} className >
                        <fieldset className="fieldset w-full  block mx-auto mx-10  py-8 border-base-300 rounded-box  border p-4">

                            <label className="label font-bold">Name</label> <br />
                            <input defaultValue={listupdateId[1]} type="text" name='name' className="input w-full" placeholder="Enter Name" /> <br />

                            <label className="label font-bold mt-3">Image</label> <br />
                            <input defaultValue={listupdateId[3]} type="text" name='image' className="input w-full" placeholder="URL" /> <br />

                            <label className="label font-bold mt-3">Category</label>
                            <select
                                value={listupdateId[6]}
                                onChange={
                                    (e) => {
                                        const copy = [...listupdateId]
                                        copy[6] = e.target.value
                                        setListUpdateId(copy)
                                    }
                                }
                                name="category"
                                className="select  w-full"

                            >
                                <option value="">Select Category</option>
                                <option value="pet">Pet</option>
                                <option value="food">Food</option>
                                <option value="accessories">Accessories</option>
                                <option value="care">Care Products</option>
                            </select>


                            <label className="label font-bold mt-3">Location</label> <br />
                            <input defaultValue={listupdateId[5]} type="text" name='location' className="input w-full" placeholder="Enter Location" /> <br />


                            <label className="label font-bold mt-3">Description</label> <br />
                            <input defaultValue={listupdateId[4]} type="text" name='description' className="input w-full" placeholder="Enter Description" /> <br />


                            <label className="label font-bold pt-5">Price</label> <br />
                            <input defaultValue={listupdateId[2]} type="text" name='price' className="input w-full" placeholder="Enter Price" /> <br />

                            <button className='btn mt-6 block mx-auto mb-5 bg-slate-500 text-white px-5'>Update</button>

                        </fieldset>
                    </form>
                </div>
            </dialog>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete!</h3>
                    <p className="py-4">Are you want to delete?</p>
                    <div className="modal-action">
                      
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleDelete(listupdateId[0])} className="btn">Yes</button>

                            <button
                                onClick={() => document.getElementById('my_modal_2').close()}
                                className="btn"
                            >
                                Close
                            </button>
                       
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyListing;
