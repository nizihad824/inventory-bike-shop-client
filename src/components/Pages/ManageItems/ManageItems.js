import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import CubeLoader from '../../CubeLoader/CubeLoader';

const ManageItems = () => {
  const [bikes, setItems] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:5000/bike')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bike/${id}`,{
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setItems(bikes.filter((bike) => bike._id !== id));
        }
      });
  };

  if (!bikes) {
    return (
      <div className="hero flex justify-center ms-64 my-64  bg-sky-100 max-w-[1000px] ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <CubeLoader />
          </div>
        </div>
      </div>
    );
  }

  return (
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
                <button className="btn btn-primary btn-xs">Order</button>
              </th>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default ManageItems;
