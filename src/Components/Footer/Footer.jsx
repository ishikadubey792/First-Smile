import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png";
import { MDBContainer, MDBFooter, MDBRow ,MDBCol} from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter , FaGoogle , FaInstagram , FaLinkedin , FaGithub , FaEnvelope } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import "../Footer/footer.styles.scss";

const Footer = () => {
  return (
   <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div>
        <span> Get connected with us on social networks: </span>
      </div>
      <div>
        <a href='' className='me-4 text-reset footer-link'>
         <FaFacebookF />
        </a>
        <a href='' className='me-4 text-reset footer-link'>
          <FaTwitter />
        </a>
        <a href='' className='me-4 text-reset footer-link'>
          <FaGoogle/>
        </a>
        <a href='' className='me-4 text-reset footer-link'>
          <FaInstagram/>
        </a>
        <a href='' className='me-4 text-reset footer-link'>
          <FaLinkedin/>
        </a>
        <a href='' className='me-4 text-reset footer-link'>
          <FaGithub/>
        </a>
      </div>
    </section>
    <section>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
           <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <img
                  src={logo}
                  alt="logo"
                  style={{ width: "45%", height: "45%"}}
                  className='me-3'
                />
                <p>
                Our moto is to make our customers happy always.......
              </p>
           </MDBCol>
           <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
                Products
            </h6>
             <p>
                <a href='' className='text-reset'>Men</a> 
             </p>  
             <p>
                <a href='' className='text-reset'>Women</a> 
             </p>  
             <p>
                <a href='' className='text-reset'>Kids</a> 
             </p> 
             <p>
                <a href='' className='text-reset'>Electronics</a> 
             </p>  
           </MDBCol>
           <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
                <a href='/about' className='text-reset'>About</a> 
             </p>  
             <p>
                <a href='' className='text-reset'>Terms and Condition</a> 
             </p>  
             <p>
                <a href='' className='text-reset'>Offers</a> 
             </p> 
             <p>
                <a href='' className='text-reset'>Help</a> 
             </p>  
           </MDBCol>
           <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
                <IoMdHome style={{color:"white"}} className='me-2'/>
                 New York, NY 10012, US
            </p>
            <p>
                <FaEnvelope style={{color:"white"}} className='me-2'/>
                firstsmile@gmail.com
            </p>
            <p>
               <FaPhone style={{color:"white"}} className='me-2'/>
               +0123456788
            </p>
           </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
   </MDBFooter>
  );
};

export default Footer;
