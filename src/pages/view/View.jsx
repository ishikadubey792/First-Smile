import React from 'react';
import "../view/view.styles.scss";
import { RxCross1 } from "react-icons/rx";
import { useLocation ,useNavigate } from 'react-router-dom';

const View = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const cross = () =>{
       navigate('/product');
  }

  return (
    <div className="view-container">
       <div className="view">
        <div className="view-item">
          <div className="view-item-image">
            <img
              src={product.img}
              alt="img"
            />
          </div>

          <div className="view-item-details">
            <div className="viw-itm">
              <h4 className="view-category">{product.category}</h4>
              <h3 className="view-title">{product.title}</h3>
              <h6 className="view-description">{product.description}</h6>
              <p className="view-price">Price: &#8377; {product.price}</p>
            </div>
            <button onClick={cross} className="btn-delete">
              <RxCross1 />
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default View;
