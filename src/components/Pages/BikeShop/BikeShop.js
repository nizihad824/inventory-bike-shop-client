import React, { useState } from 'react';
import ManageItems from '../ManageItems/ManageItems';
import MyOrders from '../MyOrders/MyOrders';


const BikeShop = () => {
  const [orders, setOrders] = useState([]);
 

  return (
    <div>
      <ManageItems orders={orders} setOrders={setOrders} />
      <MyOrders orders={orders} />
    </div>
  );
};

export default BikeShop;
