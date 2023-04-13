import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import CubeLoader from '../../CubeLoader/CubeLoader';

const ManageItems = () => {
  const [bikes, setItems] = useState([]);


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

  const handleOrder = async (id, quantity) => {
    await fetch(`https://motorbike-inventory-server.vercel.app/bike/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: quantity - 1 }),
    });
    fetchItems();
  };

  //   if (!bikes) {
  //     return (
  //       <div className="hero flex justify-center ms-64 my-64  bg-sky-100 max-w-[1000px] ">
  //         <div className="hero-content flex-col lg:flex-row">
  //           <div>
  //             <CubeLoader />
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    !bikes ? <div className="hero flex justify-center ms-64 my-64  bg-sky-100 max-w-[1000px] ">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <CubeLoader />
        </div>
      </div>
    </div> :
      <div className="overflow-x-auto w-full mt-16">
        <table className="table  w-full">
          <thead>
            <tr>
              <th>Delete</th>
              {/* <th>Delete</th> */}
              <th>Bike Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike) => (
              <tr key={bike._id}>
                <th>
                  <XIcon
                    className="h-6 w-6 text-red-600 cursor-pointer"
                    onClick={() => handleDelete(bike._id)}
                  />
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={bike?.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{bike.name}</div>

                    </div>
                  </div>
                </td>
                <td>${bike.price}</td>
                <td>{bike?.quantity || Math.floor(Math.random() * 100)}</td>
                <th>
                  <button
                    onClick={() => handleOrder(bike._id, bike?.quantity || Math.floor(Math.random() * 100))}
                    className="btn btn-primary btn-xs">Order</button>
                </th>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
  );
};

export default ManageItems;
