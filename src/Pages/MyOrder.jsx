import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import Loader from '../Components/Loader';
import jsPDF from 'jspdf';

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [order, setOrder] = useState([])
    const [localLoader,setLocalLoader] = useState(false)
    useEffect(() => {
        setLocalLoader(true)
        fetch(`http://localhost:4000/myorders/${user.email}`)
            .then(res => res.json())
            .then(data => {setOrder(data)
                setLocalLoader(false)
            })
            .catch(err => console.log(err))
    }, [user.email])

const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("My Orders Report", 20, 20);

    let y = 30; 
    doc.setFontSize(12);

    if (order.length === 0) {
        doc.text("No orders available.", 20, y);
    } else {
        order.forEach((o, index) => {
            doc.text(`Order ${index + 1}`, 20, y);
            y += 8;
            doc.text(`Product Name: ${o.productName}`, 20, y);
            y += 8;
            doc.text(`Buyer Name: ${o.buyer}`, 20, y);
            y += 8;
            doc.text(`Price: ${o.price}`, 20, y);
            y += 8;
            doc.text(`Quantity: ${o.quantity}`, 20, y);
            y += 8;
            doc.text(`Address: ${o.address}`, 20, y);
            y += 8;
            doc.text(`Date: ${o.date}`, 20, y);
            y += 8;
            doc.text(`Phone: ${o.number}`, 20, y);
            y += 10;
            doc.line(20, y, 190, y); 
            y += 10;

         
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        });
    }


    doc.save("MyOrders.pdf");
  };


    return (
        <div>
            <h1 className='font-bold text-center mt-5 text-3xl underline'>My Orders</h1>
            {
               localLoader ?<Loader></Loader> :<div className="overflow-x-auto mt-15 flex md:justify-center">
                    {
                        order.length == 0
                            ? <p className='font-bold text-[grey] mt-10'>No Available Data</p>
                            :
                            <table className="table  bg-white shadow-2xl md:max-w-[1000px] pl-5 md:pl-20 mb-[50px]">
                                {/* head */}
                                <thead >
                                    <tr className='text-xl font-bold'>
                                        <th>Product Name</th>
                                        <th>Buyer Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Address</th>
                                        <th>Date</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        order.map(order => <tr >

                                            <td className=' font-bold'>
                                                {order.productName}
                                            </td>


                                            <td className='font-bold'>
                                                {order.buyer}
                                            </td>
                                            <td className=' px-4 py-2 font-bold'>{order.price}</td>
                                            <td className=' px-4 py-2 font-bold'>{order.quantity}</td>
                                            <td className=' px-4 py-2 font-bold'>{order.address}</td>
                                            <td className=' px-4 py-2 font-bold'>{order.date}</td>
                                            <td className=' px-4 py-2 font-bold'>{order.number}</td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>

                    }
                </div>
                    
            }

              <button onClick={downloadPDF} className={`${order.length == 0 && 'hidden'} btn block bg-red-700 text-white mx-auto`}>Download Report </button>
        </div>
    );
};

export default MyOrder;
