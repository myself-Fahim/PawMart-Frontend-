import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [showName, setShowName] = useState(false)
    const [checked, setChecked] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const [imageError, setImageError] = useState(false);

    const navigator = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => toast.success('Logout Successfully'))
            .catch((error) => toast.error(error.message))
    }

    const handletheme = (e) => {
       
        setChecked(e.target.checked)
    }

    const handleDashboard = () => {
        navigator('/dashboard')
    }

    useEffect(() => {
        const theme = checked ? "dark" : "light"
        document.documentElement.setAttribute("data-theme", theme)

        if (checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [checked])






    return (
        <div className='bg-[#2D2D2D] z-50 py-4 px-[5px] lg:px-[80px]'>
            <Toaster />
            <div className="flex justify-between p-3 ">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-black/60 rounded-box z-5 mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className="flex titan">
                                Home
                            </NavLink>
                            <NavLink to='/pet_supplies' className="titan" >
                                Pet & Supplies
                            </NavLink>
                            <NavLink to='/about' className="titan" >
                                About
                            </NavLink>
                            <NavLink to='/contact' className="titan" >
                                Blog
                            </NavLink>
                            {
                                user && <>
                                    <NavLink to='/addlisting' className="titan">Add Listing</NavLink>
                                    <NavLink to={`/mylistings/${user.email}`} className="titan">My Listings</NavLink>
                                    <NavLink to={`/myorders/${user.email}`} className="titan">My Orders</NavLink>
                                </>
                            }

                        </ul>
                    </div>
                    <div className=' hidden md:flex items-center gap-2'>
                        <div className='w-[30px] h-[30px] '>
                            <img src="https://i.ibb.co.com/Kpbv5Bpp/a4c2a2a9ba9fda58fc3fcdf92d806dda-love-pet-shop-logo-design.jpg"
                                className='w-full h-full rounded-full object-cover' />
                        </div>

                        <a className=" text-xl text-white font-bold titan">Paw-Mart</a>
                    </div>
                    <a className="md:hidden text-xl text-white font-bold shrink-0 titan">Paw-Mart</a>
                </div>
                <div className="navbar-center mr-5 lg:mr-0 hidden lg:flex">
                    <ul className=" px-1 text-white font-bold">
                        <NavLink to='/' className='mr-5 titan  relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>
                            Home
                        </NavLink>
                        <NavLink to='/pet_supplies' className='mr-5 titan relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full' >Pet & Supplies</NavLink>

                        {
                            user && <>
                                <NavLink to='/addlisting' className='mr-5 titan
                                relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Add Listing</NavLink>
                                <NavLink to={`/mylistings/${user.email}`} className='mr-5 titan
                                relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>My Listings</NavLink>
                                <NavLink to={`/myorders/${user.email}`} className='titan mr-5
                                relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>My Orders</NavLink>
                            </>
                        }
                        <NavLink to='/about' className='titan mr-5  relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>About</NavLink>
                        <NavLink to='/contact' className='titan mr-5  relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full' >
                            Contact
                        </NavLink>

                    </ul>
                </div>

                <div className="navbar-end flex gap-2 md:gap-3">



                    <div className='mr-4 md:mr-6'>
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input onChange={handletheme} type="checkbox" className="theme-controller" value="synthwave"  checked={checked} />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>

                    </div>



                    {




                        user ?
                            <div className=' relative  rounded-full flex items-center justify-center  gap-3'>


                                <div>

                                    <div onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)} className='h-[35px] w-[35px] shrink-0 '>
                                        {!imageError && user?.photoURL ? (
                                            <img
                                                className='h-full w-full rounded-full object-cover'
                                                src={user.photoURL}
                                                alt="Profile avatar"
                                                onError={() => setImageError(true)}
                                            />
                                        ) : (
                                            <div className='h-full w-full rounded-full bg-gray-300 flex items-center justify-center'>
                                                <CgProfile size={20} className='text-gray-600' />
                                            </div>
                                        )}

                                    </div>

                                    {showName && (
                                        <p className="absolute -top-[25px] left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded px-3 py-1 whitespace-nowrap shadow">
                                            {user.displayName}
                                        </p>
                                    )}

                                </div>


                                <button className='text-white font-bold  cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}>
                                    <IoMdArrowDropdown className='text-2xl' />
                                </button>

                                {showDropdown && (
                                    <div className="absolute z-50 right-0 top-10 w-40 bg-white rounded shadow-lg border py-1">

                                        <button onClick={handleDashboard} className=" w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">Dashboard</button>
                                        <button onClick={handleSignOut} className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">Log Out</button>
                                    </div>
                                )}


                            </div>

                            :
                            <>
                                <Link className='btn rounded-xl titan' to='/login'>Login</Link>

                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar; 