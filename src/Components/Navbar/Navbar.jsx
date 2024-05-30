import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.styles.scss";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import Search from "../Search/Search";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebaseInit";
import toast from "react-hot-toast";
import { useAuthContext } from "../../Config/authProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useAuthContext();
  const logoutUser = async () => {
    try {
      await signOut(auth);
      toast.success("user log out successfully");
      console.log("user log out successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const [menuHidden, setMenuHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setMenuHidden(true);
      } else {
        setMenuHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        zIndex: "10",
      }}
    >
      {/* header part  */}
      <div className="announcement-bar-container">
        <div>
          <MdLocalShipping style={{ color: "#E49B0F" }} />
        </div>
        <div>Free Shipping when shopping upto Rs.1000</div>
      </div>
      {/* first navbar for logo , search and cart  */}
      <MDBNavbar className="firstNav" expand="lg" dark bgColor="white">
        <MDBContainer className="wrapper">
          <Link
            to="/"
            style={{ color: "black", height: "45px" }}
            className="logo"
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "110%", height: "150%", marginTop: "-15px" }}
            />
          </Link>
          <Search />
          <div className="d-flex  align-items-center tools">
            <div
              className="d-flex user"
              style={{ gap: "6%", whiteSpace: "nowrap", marginTop: "8px" }}
            >
              <div>
                <FaRegUserCircle />
              </div>
              <div>
                <p> Hello! {user?.displayName ? user?.displayName : "Guest"}</p>
              </div>
            </div>
            <div className="d-flex mb-2" style={{ gap: "20%" }}>
              <div>
                <Link to="/">
                  <FaRegHeart />
                </Link>
              </div>
              <div>
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>
              </div>
              <div>
                <Link to="/order">
                  <MdLocalShipping />
                </Link>
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* second navbar part for pages  */}
      <MDBNavbar
        className={menuHidden ? "hide" : "unHide"}
        expand="lg"
        dark
        bgColor="white"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MDBContainer
          style={{ display: "flex", gap: "3%", justifyContent: "flex-start" }}
        >
          <div>
            <Link to="/" className="nav">
              Home
            </Link>
          </div>
          <div>
            <Link to="/product" className="nav">
              Products
            </Link>
          </div>
          <div>
            <Link to="/about" className="nav">
              About
            </Link>
          </div>
          {!user && (
            <div>
              <Link to="/signin" className="nav">
                Log in
              </Link>
            </div>
          )}
          {user && (
            <div onClick={logoutUser} style={{ marginLeft: "auto" }}>
              <IoIosLogOut style={{ cursor: "pointer" }} />
            </div>
          )}
        </MDBContainer>
      </MDBNavbar>
    </nav>
  );
};

export default Navbar;
