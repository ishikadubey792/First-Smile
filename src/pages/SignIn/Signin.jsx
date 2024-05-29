import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebaseInit';
import toast from 'react-hot-toast';
import login from "../../assets/login.jpg";

const Signin = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth , email , password);
      console.log("user login successful");
      navigate('/')
    } catch (error) {
      console.log(error.message);
      toast.error("error! Check your details",{
        position: "bottom-center", 
      });
    }
  }
    return (
        <MDBContainer className="my-5 margintop" style={{marginTop:"14%"}}>
          <MDBCard>
            <MDBRow className='g-0'>
    
              <MDBCol md='6'>
                <MDBCardImage src={login} alt="login form" className='rounded-start w-100'/>
              </MDBCol>
    
              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
    
                  <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                    <span className="h1 fw-bold mb-0">  <img src={logo} alt="logo" style={{ width: "30%", height: "90%" }} /></span>
                  </div>
    
                  <form onSubmit={handleSubmit}>
                    <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sigin into your account</h5>
                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <MDBBtn type='submit' className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                  </form>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <NavLink to="/signup" style={{color: '#393f81'}}>Register here</NavLink></p>
    
                  <div className='d-flex flex-row justify-content-start'>
                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
                  </div>
    
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      );
}

export default Signin;
