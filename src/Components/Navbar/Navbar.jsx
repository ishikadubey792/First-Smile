import React from "react";
import "../Navbar/Navbar.styles.scss";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
// import Button from "react-bootstrap/Button";
import Search from "../Search/Search";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebaseInit";
import toast from "react-hot-toast";

const Navbar = () => {
  const logoutUser = async ()=>{
      try {
        await signOut(auth);
        toast.success("user log out successfully");
        console.log("user log out successfully");
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <navbar style={{position:'fixed', top:'0' , left:'0', width:'100vw', zIndex:'10'}}>
      {/* header part  */}
      <div className="announcement-bar-container">
        <div>
          <MdLocalShipping style={{ color: "#E49B0F" }} />
        </div>
        <div>Free Shipping when shopping upto Rs.1000</div>
      </div>
      {/* first navbar for logo , search and cart  */}
      <MDBNavbar
      className="firstNav"
        expand="lg"
        dark
        bgColor="white"
      >
        <MDBContainer style={{ display: "flex", alignItems: "center", justifyContent:'space-evenly'}}>
          <MDBNavbarBrand href="#" style={{ color: "black", height: "45px" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "110%", height: "150%", marginTop: "-15px" }}
            />
          </MDBNavbarBrand>
            <Search/>
          <div className="d-flex mr-auto user" style={{ gap: "6%" , whiteSpace: "nowrap" , marginTop:"8px"}}>
              <div>
                <FaRegUserCircle />
              </div>
              <div>
                  <p> Hello! Ishika</p>
              </div>
          </div>   
           <div className="d-flex mr-auto mb-4" style={{gap:'20%' }}>
           <div>
              <MDBNavbarLink href="/favourite">
                <FaRegHeart />
              </MDBNavbarLink>
            </div>
            <div>
              <MDBNavbarLink href="/cart">
                <FaShoppingCart />
              </MDBNavbarLink>
            </div>
            <div>
              <MDBNavbarLink href="#">
                <MdLocalShipping />
              </MDBNavbarLink>
            </div>
           </div>
        </MDBContainer>
      </MDBNavbar>

      {/* second navbar part for pages  */}
      <MDBNavbar
        expand="lg"
        dark
        bgColor="white"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px", height: "60px", display:'flex', alignItems:'center'}}
      >
        <MDBContainer style={{ display: "flex", gap: "3%", justifyContent:'flex-start' }}>
          <div>
            <MDBNavbarLink href="/" className="nav">Home</MDBNavbarLink>
          </div>
          <div>
            <MDBNavbarLink href="/product" className="nav">Products</MDBNavbarLink>
          </div>
          <div>
            <MDBNavbarLink href="/about"  className="nav">About</MDBNavbarLink>
          </div>
          <div>
            <MDBNavbarLink href="/contact" className="nav">Contact Us</MDBNavbarLink>
          </div>
          <div onClick={logoutUser} style={{marginLeft:'auto'}}>
            <IoIosLogOut style={{cursor:'pointer'}}/>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </navbar>
  );
};

export default Navbar;
