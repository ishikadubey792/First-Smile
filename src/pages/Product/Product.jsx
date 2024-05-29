import React, { useContext, useEffect } from "react";
import "../Product/product.styles.scss";
import Filter from "../../Components/Filter/Filter";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  productSelector,
  setFilteredProducts,
} from "../../Redux/Reducer/productReducer";
import { Button } from "react-bootstrap";
import addToCart from "../../assets/addToCart.png";
import { addToCarts } from "../../Redux/Reducer/cartReducer";
import { useAuthContext } from "../../Config/authProvider";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { filteredProducts } = useSelector(productSelector);
  const dispatch = useDispatch();
  const user = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(filteredProducts);
    dispatch(setFilteredProducts());
  }, [dispatch]);

  const viewPage = (product) => {
    navigate('/view', { state: { product } });
  };
  return (
    <div className="container">
      <div className="filter">
        <Filter />
      </div>
      <div className="product-container2">
        {filteredProducts.map((product) => (
          <div className="product2" key={product.id}>
            <div className="product-image">
              <div className="choice2">
                <div
                  className="div2"
                  onClick={() =>
                    dispatch(addToCarts({ uid: user.uid, item: product }))
                  }
                >
                  <GrCart
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  />
                </div>
                <div className="div2">
                  <FaRegHeart
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  />
                </div>
                <div onClick={() => viewPage(product)} className="div2">
                  <IoEyeOutline
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  />
                </div>
              </div>
              <img src={product.img} alt="Product Image" />
            </div>
            <div className="product-details">
              <h6 className="product-category">{product.category}</h6>
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">&#8377; {product.price}</p>
              <p className="product-discount">{product.discount}% Off</p>
            </div>
            <Button
              onClick={() =>
                dispatch(addToCarts({ uid: user.uid, item: product }))
              }
              className="product-cart2"
            >
              <img src={addToCart} alt="cart" width={20} /> Add To Bag
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
