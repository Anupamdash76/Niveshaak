import React, { useContext } from 'react';
import GeneralContext from './GeneralContext';
import './Orders.css'; // Make sure to create this CSS file

const Orders = () => {
  const { orders } = useContext(GeneralContext);

  if (!orders || orders.length === 0) {
    return (
      <div className="orders-container">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td className={order.mode === 'BUY' ? 'up' : 'down'}>{order.mode}</td>
                <td>{order.qty}</td>
                <td>₹{order.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;