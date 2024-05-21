import { MDBCard, MDBCardBody,
   MDBCol, MDBContainer,
   MDBRow , MDBCardImage ,
   MDBIcon, MDBInput , MDBBtn} 
from 'mdb-react-ui-kit'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink , useNavigate} from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useState } from 'react';
import { createUserWithEmailAndPassword, updatePhoneNumber, updateProfile } from 'firebase/auth';
import { auth , db } from '../../Config/firebaseInit';
import { setDoc , doc } from 'firebase/firestore';
import toast from 'react-hot-toast';


const Signup = () => {
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [name , sestName] = useState("");
const [contact , setContact] = useState("");
const navigate = useNavigate();

const handleRegister = async (e) => {
   e.preventDefault();
   try {
    await createUserWithEmailAndPassword(auth, email, password, contact);
    const user = auth.currentUser;
    console.log(user);
    await updateProfile(auth.currentUser, {displayName: name})
    if(user){
      await setDoc(doc(db, "users", user.uid), {
         name: name,
         email: email,
         contact: contact
      });
    }
    console.log("user regestered successfully");
     navigate('/');
    toast.success("user registered successfully",{
      position: "top-center", 
    });
   } catch (error) {
      console.log(error.message);
      toast.error("error! Check your details",{
        position: "bottom-center", 
      });
   }
}
  return (
    <MDBContainer className='my-5' style={{marginTop:"14%"}}>
      <MDBCard>
         <MDBRow className='g-0'>
            <MDBCol md='6'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'></MDBCardImage>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
                <div className='d-flex flex-row mt-2'>
                   <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                   <span className='h1 fw-bold mb-0'><img src={logo} alt="logo" style={{ width: "30%", height: "90%" }} /></span>
                </div>
                <form onSubmit={handleRegister}>
                <h5 className='fw-normal my-4 pb-3' style={{letterSpacing:"1px"}}>Sign Up Your Account</h5>
                <MDBInput wrapperClass='mb-4' label='User name' id='formControllg' type='text' size='lg' value={name} onChange={(e)=>sestName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Phone number' id='formControllg' type='text' size='lg' value={contact} onChange={(e)=>setContact(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControllg' type='email' size='lg' value={email} onChange={((e)=>setEmail(e.target.value))}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControllg' type='password' size='lg' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <MDBBtn className='mb-4 px-5' color="dark" size="lg">Sign Up</MDBBtn>
                </form>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <NavLink to="/signin" style={{color: '#393f81'}}>Sign in here</NavLink></p>

                <div className='d-flex flex-row justify-content-start'>
                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
                  </div>
    
              </MDBCardBody>
            </MDBCol>
         </MDBRow>
      </MDBCard>
    </MDBContainer>
  )
}

export default Signup
