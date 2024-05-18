import React from 'react';
import "../About/about.styles.scss";
import logo from "../../assets/logo.png";
import Footer from "../../Components/Footer/Footer";
import { FaQuestionCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
      <h1><FaQuestionCircle /> ABOUT US</h1>
      <div className='us'>
          <img src={logo} alt='logo' height="80px" width="95px"/>
          <p>Welcome to First Smile, your premier destination for all your online shopping needs. At First Smile, we believe in providing our customers with a seamless and enjoyable shopping experience from start to finish.</p>
          <p>Established with a passion for connecting people with top-quality products, First Smile aims to simplify the online shopping process by offering a diverse range of products across various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, or essential household items, we've got you covered.</p>
          <p>Our commitment to customer satisfaction is at the forefront of everything we do. We strive to offer competitive prices, exceptional customer service, and a secure platform for your peace of mind. With First Smile, you can shop confidently, knowing that your satisfaction is our top priority.</p>
          <p>At First Smile, we're more than just an e-commerce website; we're a community dedicated to helping you find exactly what you need, when you need it. Join us on this exciting journey as we continue to expand our product offerings and enhance your shopping experience.</p>
          <p>Thank you for choosing First Smile. Happy shopping!</p>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About
