import React, { useEffect } from "react";
import "../Shipping/Shipping.styles.scss";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import sold from "../../assets/soldOut.png";                             
import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../../Config/authProvider";
import {
  fetchAllOrders,
  orderSelector,
} from "../../Redux/Reducer/shippingReducer";

const Shipping = () => {
  const { orders } = useSelector(orderSelector);
  const user = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrders(user.uid));
  }, [dispatch, user]);


  return (
    <div className="order-container">
      {orders.length === 0 ? (
        <div className="empty-orders">
          <h1 className="empty-icon">
            <MdLocalShipping className="flipped-icon" />
          </h1>
          <h2 className="empty-text">You aren't any order yet.</h2>
          <Link className="shop-now" to="/product">
            Shop Now <FaArrowRight />
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <h2 className="order-title">
            <MdLocalShipping className="order-icon" /> Your Orders
          </h2>
          {orders.map((o, orderIndex) => (
            <div key={orderIndex} className="order-card">
              <h2 className="order-date">Order on: {o.purchaseDate}</h2>
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {o.order.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>{item.title}</td>
                      <td>&#x20B9; {item.price}</td>
                      <td>{item.qty}</td>
                      <td>&#x20B9; {item.price * item.qty}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}></td>
                    <td>Total: </td>
                    <td>&#x20B9; {o.order.reduce((acc, item) => acc + item.price * item.qty, 0)}/-</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="thank-you-text">
                      Thank you for your purchasing. For more purchases,
                      <Link to="/" className="visit-link">
                        visit
                      </Link>
                       again.
                    </td>
                    <td>
                      <img src={sold} alt="sold" className="sold-image" />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shipping;
