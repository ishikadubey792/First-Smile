import React from 'react';
import "../Product/product.styles.scss";
import Filter from '../../Components/Filter/Filter';
import productImg from "../../assets/item8.avif";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Product = () => {
  return (
   <div className='container'>
    <div className='filter'>
       <Filter/>   
    </div>
    <div className="product-card">
      <img src={productImg} alt="img"  className="product-image" />
      <div className="product-details">
        <h2 className="product-name">product name</h2>
        <p className="product-price">product price</p>
        <div className='think'>
           <GrCart />
           <FaRegHeart />
           <IoEyeOutline />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Product
