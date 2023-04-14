import React from 'react';
import CubeLoader from '../../CubeLoader/CubeLoader';
import { TabTitle } from '../../../utilities/FunctionTitle';

const MyOrders = ({ orders }) => {
  console.log(orders);
  TabTitle('Orders');
  return (
    !orders ? (
      <div className="hero flex justify-center ms-64 my-96 max-w-[1000px] ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <CubeLoader />
          </div>
        </div>
      </div>
    ) : (
      <div className="my-orders  mt-8">
        <h2 className="text-2xl font-bold">My Orders</h2>
        <ul>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <li key={order._id} className="border p-4 mt-4">
                <div className="flex items-center space-x-4">
                  <img src={order.img} alt={order.name} className="w-16 h-16" />
                  <div>
                    <p className="font-bold">{order.name}</p>
                    <p>Price: ${order.price}</p>
                    <p>Quantity: {order.quantity}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </ul>
      </div>
    )
  );
};

export default MyOrders;
