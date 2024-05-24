import React from "react";
// import { auth } from '../../Config/firebaseInit';
import Footer from "../../Components/Footer/Footer";
import banner from "../../assets/mainbanner.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.styles.scss";
import { Button, Carousel, Image } from "react-bootstrap";
import slide1 from "../../assets/img5.avif";
import slide2 from "../../assets/img6.avif";
import slide3 from "../../assets/img7.avif";
import slide4 from "../../assets/img4.avif";
import jewellery from "../../assets/item2.jpg";
import watches from "../../assets/item3.jpg";
import heels from "../../assets/item4.webp";
import bags from "../../assets/item8.avif";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Fill, RiDiscountPercentLine } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { useSelector } from "react-redux";
import { productSelector } from "../../Redux/Reducer/productReducer";
import addToCart from "../../assets/addToCart.png";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Home = () => {
  // const [userDetails , setUserDetails] = useState(null);

  // const fetchUserData = () =>{
  //   auth.onAuthStateChanged(async (user) =>{
  //       console.log(user);
  //       const docRef = doc(db,"users" , user.uid);
  //       const docSnap = await getDoc(docRef);
  //       if(docSnap.exists()) {
  //         setUserDetails(docSnap.data());
  //         console.log(docSnap.data());
  //       }else{
  //         console.log("user is not logged in");
  //       }
  //   })
  // }

  const { products } = useSelector(productSelector);

  return (
    <>
      <div className="home1">
        <img className="mainbanner" src={banner} alt="banner" />
      </div>
      <Carousel interval={2000} controls={false}>
        <Carousel.Item>
          <a href="/product">
            <Image className="img-fluid" src={slide1} alt="slide 1" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/product">
            {" "}
            <Image className="img-fluid" src={slide2} alt="slide 2" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/product">
            {" "}
            <Image className="img-fluid" src={slide3} alt="slide 3" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/product">
            <Image className="img-fluid" src={slide4} alt="slide 4" />
          </a>
        </Carousel.Item>
      </Carousel>
      <div className="topdeals">
        <div className="electronic">
          <h2>Top Deals</h2>
          <span className="details">
            <a href="#">See more</a>
          </span>
        </div>
        <div className="itmes">
          <div className="deals">
            <img src={jewellery} alt="item2" />
            <p>Jewellery</p>
          </div>
          <div className="deals">
            <img src={watches} alt="item3" />
            <p>Watches</p>
          </div>
          <div className="deals">
            <img src={heels} alt="item4" />
            <p>Footwear</p>
          </div>
          <div className="deals">
            <img src={bags} alt="item5" />
            <p>Handbags</p>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="policy">
          <div>
            <LiaShippingFastSolid className="shipping" />
          </div>
          <div className="terms">
            <p className="bold">Free Shiping</p>
            <p>Order above Rs.1000</p>
          </div>
        </div>
        <div className="policy">
          <div>
            <RiRefund2Fill className="shipping" />
          </div>
          <div className="terms">
            <p className="bold">Return & Refund</p>
            <p>Order above Rs.1000</p>
          </div>
        </div>
        <div className="policy">
          <div>
            <RiDiscountPercentLine className="shipping" />
          </div>
          <div className="terms">
            <p className="bold">Member Discount</p>
            <p>Order above Rs.1000</p>
          </div>
        </div>
        <div className="policy">
          <div>
            <AiFillCustomerService className="shipping" />
          </div>
          <div className="terms">
            <p className="bold">Customer Support</p>
            <p>Order above Rs.1000</p>
          </div>
        </div>
      </div>
      <div className="topProducts">
        <div className="electronic">
          <h2>Top Products</h2>
          <span className="details">
            <a href="#">See more</a>
          </span>
        </div>
        <div className="product-container">
          {products.slice(0, 9).map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <div className="choice">
                  <div className="div">
                  <GrCart style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}/>
                  </div>
                 <div className="div">
                 <FaRegHeart style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}/>
                 </div>
                  <div className="div">
                    <IoEyeOutline style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} />
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
              <Button className="product-cart"><img src={addToCart} alt="cart" width={20}/>Add To Bag</Button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
