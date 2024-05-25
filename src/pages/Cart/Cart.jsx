import React, { useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import "../Cart/cart.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, decreaseItemCart, deletecart, getCart, increaseItemCart } from "../../Redux/Reducer/cartReducer";
import { useAuthContext } from "../../Config/authProvider";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { checkoutOrders } from "../../Redux/Reducer/shippingReducer";

const Cart = () => {
  const { cart , total} = useSelector(cartSelector);
  const dispatch = useDispatch();
  const user = useAuthContext(); 
  const navigate = useNavigate();
  
  // increase quantity
  useEffect(()=>{
    dispatch(getCart(user.uid));
  },[dispatch , user]);

  const checkout = ()=>{
    dispatch(checkoutOrders(user.uid));
    navigate('/order');
  }
  return (
    <div className="cart-container">
    {cart.length === 0 && (
         <div className="empty-cart">
         <h1 className="cart-icon">
           <GiShoppingCart />
         </h1>
         <h2 className="text-lg font-normal">Your Cart is Empty.</h2>
         <a
           className="mt-5 text-lg px-5 py-3 shop-btn"
           href="/product"
         >
           Shop Now <FaArrowRight/>
         </a>
       </div>
    )} 


      {cart.length > 0 && (
        <h2 className="cart-title">
          <GiShoppingCart /> Your Cart
        </h2>
      )}
      <div className="item-container">
        {cart.map((item) => (
           <div key={item.id} className="cart">
            <div className="cart-item">
              <div className="cart-item-image">
                <img
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <div className="cart-item-details">
                <div className="crt-itm">
                  <h4 className="item-category">{item.category}</h4>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">Price: &#8377; {item.price}</p>
                  <div className="item-quantity">
                    <button className="btn-increase" onClick={()=> dispatch(increaseItemCart({uid: user.uid , item}))}>
                      <MdAdd />
                    </button>
                    <input type="text" value={item.qty} className="quantity-input" readOnly/>
                    <button className="btn-decrease" onClick={()=> dispatch(decreaseItemCart({uid: user.uid, item}))}>
                      <FaMinus />
                    </button>
                  </div>
                  <h4 className="item-subtotal">sub-total: &#8377; {item.qty * item.price}</h4>
                </div>
                <button onClick={()=> dispatch(deletecart({uid: user.uid , item}))} className="btn-delete">
                  <RxCross1 />
                </button>
              </div>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
             <div className="checkout">
             <h3 className="total-price">Total Price: &#8377; {total} </h3>
             <button onClick={checkout}  className="btn-checkout">Checkout</button>
           </div>
        )}
      </div>
       <Footer/>
    </div>
  );
};

export default Cart;
