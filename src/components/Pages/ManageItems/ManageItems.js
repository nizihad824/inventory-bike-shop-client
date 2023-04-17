import React, { useState, useEffect, useContext } from 'react';
import { XIcon } from '@heroicons/react/solid';
import CubeLoader from '../../CubeLoader/CubeLoader';
import MyOrders from '../MyOrders/MyOrders';
import { AuthContext } from '../../../authentication/AuthProvider';
import { TabTitle } from '../../../utilities/FunctionTitle';


const ManageItems = ({ orders, setOrders }) => {
  const [bikes, setItems] = useState([]);
  const { loading } = useContext(AuthContext);
  // const [orders, setOrders] = useState([]);

  const handleAddOrder = (bike) => {
    const newOrder = {
      _id: bike._id,
      name: bike.name,
      img: bike.img,
      price: bike.price,
      quantity: 1,
    };

    setOrders([...orders, newOrder]);
  };




  useEffect(() => {
    fetch('https://motorbike-inventory-server.vercel.app/bike')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const fetchItems = async () => {
    const response = await fetch('https://motorbike-inventory-server.vercel.app/bike');
    const data = await response.json();
    setItems(data);
  };

  const handleDelete = (id) => {
    fetch(`https://motorbike-inventory-server.vercel.app/bike/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setItems(bikes.filter((item) => item._id !== id));
        }
      });
  };

  const handleOrder = async (bike, quantity) => {
    // console.log('Before update:', bike._id, bike);
    await fetch(`https://motorbike-inventory-server.vercel.app/bike/${bike._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: quantity - 1 }),
    });
    fetchItems();
    handleAddOrder(bike);
    // console.log('After update:', bike);
  };
  // const handleOrder = async (id, quantity) => {
  //   console.log('Before update:', id);
  //   await fetch(`https://motorbike-inventory-server.vercel.app/bike/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ quantity: quantity - 1 }),
  //   });
  //   fetchItems();

  // };


  TabTitle('ManageItems');
  return (
    bikes.length < 1 ? <div className="hero flex justify-center ms-64 my-64 max-w-[1000px] ">
  <div 
  style={{ backgroundColor: "#DEE5E5" }}
  className="hero-content flex-col lg:flex-row ">
  <div>
    <CubeLoader />
  </div>
</div>
</div>
:<div className="overflow-x-auto w-full mt-16 md:mx-w-[500px] sm:mx-w-[300px] h-full shadow-lg">
  <table className=" w-full md:mx-w-[500px] sm:mx-w-[300px]" style={{ backgroundColor: '#f3f4f6' }}>
    <thead>
      <tr className="bg-gray-200 text-gray-700">
        <th className="py-3 px-2 sm:px-6 text-left">Delete</th>
        <th className="py-3 px-2 sm:px-6 text-left">Bike Name</th>
        <th className="py-3 px-2 sm:px-6 text-left">Price</th>
        <th className="py-3 px-2 sm:px-6 text-left">Quantity</th>
        <th className="py-3 px-2 sm:px-6 text-left">Status</th>
      </tr>
    </thead>
    <tbody className="text-gray-700">
      {bikes.map((bike) => (
        <tr key={bike._id} className="border-b border-gray-200">
          <th className="py-3 px-2 sm:px-6">
            <XIcon
              className="h-6 w-6 text-red-600 cursor-pointer"
              onClick={() => handleDelete(bike._id)}
            />
          </th>
          <td className="py-3 px-2 sm:px-6">
            <div className="flex items-center space-x-3">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={bike?.img || `https://picsum.photos/200?random=${bike._id}`}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
              <div>
                <div className="font-bold">{bike.name}</div>
              </div>
            </div>
          </td>
          <td className="py-3 px-2 sm:px-6">${bike.price}</td>
          <td className="py-3 px-2 sm:px-6">{bike?.quantity || Math.floor(Math.random() * 100)}</td>
          <th className="py-3 px-2 sm:px-6">
            <button
              onClick={() => handleOrder(bike, bike?.quantity || Math.floor(Math.random() * 100))}
              className="btn btn-primary btn-xs bg-blue-600 text-white px-4 py-2 rounded shadow-md"
            >
              Order
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>




      
       
     
  );
};

export default ManageItems;
